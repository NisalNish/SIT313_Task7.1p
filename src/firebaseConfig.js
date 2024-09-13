// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKGXN4v0U5mQaE_OHOtsWN7pVuYwWm1fI",
    authDomain: "dev-deakin-login-6275f.firebaseapp.com",
    projectId: "dev-deakin-login-6275f",
    storageBucket: "dev-deakin-login-6275f.appspot.com",
    messagingSenderId: "143920255987",
    appId: "1:143920255987:web:e7553d7d0616c7d7c13886"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
