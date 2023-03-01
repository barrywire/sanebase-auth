// React imports
import { useContext, createContext, useEffect, useState } from 'react';

// Firebase imports
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';

// Firestore imports
import { doc, setDoc } from 'firebase/firestore';

// Utility imports
import { auth, db } from './firebase'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>
{
    const [user, setUser] = useState({});

    // GOOGLE PROVIDER
    const google_sign_in = () =>
    {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    // Add other auth providers here

    // SIGN OUT
    const sign_out = () =>
    {
        signOut(auth)
    }

    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth, (current_user) =>
        {
            setUser(current_user)
            // console.log('Current User', current_user);

            // Send select user data to Firestore
            console.log('User Data', current_user)

            if (current_user)
            {
                const user_ref = doc(db, 'users', current_user.uid);

                // Add user data to Firestore
                setDoc(user_ref, {
                    name: current_user.displayName,
                    email: current_user.email,
                    photo: current_user.photoURL,
                    uid: current_user.uid,
                    provider: current_user.providerData[0].providerId,
                    address: '',
                    phone: '',
                    user_type: 'user',
                    created_at: new Date(),
                })

                console.log('User is signed in');
            }
        });
        return () =>
        {
            unsubscribe();
        };
    }, [user])

    return (
        <AuthContext.Provider value={{ google_sign_in, sign_out, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () =>
{
    return useContext(AuthContext)
}
