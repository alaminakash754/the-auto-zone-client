import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AutoZoneContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password, name) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password, name)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signWithGoogle
    }


    return (
        <AutoZoneContext.Provider value={userInfo}>
            {children}
        </AutoZoneContext.Provider>
    );
};

export default UserProvider;