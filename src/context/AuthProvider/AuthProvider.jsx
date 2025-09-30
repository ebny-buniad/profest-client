import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { auth } from '../../../firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log('current user',user)


    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(email, password)
    }

    // Login with google
    const signinWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // Manage user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    });

    // Log out user

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signInUser,
        user,
        loading,
        signinWithGoogle,
        logOut

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;