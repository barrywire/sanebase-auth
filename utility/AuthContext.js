// React imports
import { useContext, createContext, useEffect, useState } from 'react';

// Firebase imports
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';

// Utility imports
import { auth } from './firebase'

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
            console.log('Current User', current_user);
        });
        return () =>
        {
            unsubscribe();
        };
    }, [])

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
