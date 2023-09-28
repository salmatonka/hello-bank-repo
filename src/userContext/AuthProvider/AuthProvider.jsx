import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // createUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // updateName
    const updateName = (firstName,photo)=>{
        // setLoading(true)
        return updateProfile(auth.currentUser,{ displayName:firstName,
        photoURL: photo })
      }

    


    //   verifyEmail
const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser)
}

// googleSignIn
const googleSignIn = ()=>{
    return signInWithPopup(auth,googleProvider)
}

// login
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email, password)
    }
// forgetPassword
const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth,email)
}
// logOut
const logOut = () =>{
    return signOut(auth)
}


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = { user,
         loading, 
         createUser,
         updateName,
         verifyEmail,
         googleSignIn, 
         login,resetPassword,logOut};

    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;