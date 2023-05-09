import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../configFirebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const gibhubProvider= new GithubAuthProvider();
const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allchefs,setAllchefs] = useState([]);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,gibhubProvider)
    }


    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const updateUserName=(name)=>{
        updateProfile(auth.currentUser, {
            displayName: `${name}`
          }).then(() => {
            console.log('displayname updated')
          }).catch((error) => {
            console.log(error.message)
          });
    }
    const logOut = () => {
        setLoading(true);
        setUser(null)
        toast.success('logged Out')
        setLoading(false);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInGithub,
        signInGoogle,
        logOut,
        setUser,
        updateUserName,
        setAllchefs,
        allchefs
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;