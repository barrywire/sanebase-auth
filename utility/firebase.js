// Firebase app initialization
import { initializeApp } from 'firebase/app';

// Analytics SDK Import
// import { getAnalytics } from 'firebase/analytics';

// Authentication SDK Import
import { getAuth } from 'firebase/auth';

// Firestore SDK Import
import { getFirestore } from 'firebase/firestore';

const firebase_config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebase_config);

// Authentication
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// App export
export default app;
