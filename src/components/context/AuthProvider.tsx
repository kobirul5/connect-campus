/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import useAxiosPublic from "@/hooks/axiosPublic";
import auth from "@/lib/firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    User as FirebaseUser,
} from "firebase/auth";
import {
    createContext,
    useEffect,
    useState,
    ReactNode,
} from "react";



export interface AuthContextType {
    user: FirebaseUser | null;
    loading: boolean;
    userDB: IUser | null;              
  setUserDB: (userDB: IUser | null) => void; 
    setLoading: (loading: boolean) => void;
    userCreate: (email: string, password: string) => Promise<any>;
    userLogin: (email: string, password: string) => Promise<any>;
    updateUserProfile: (name: string, photo: string) => Promise<void>;
    logOut: () => Promise<void>;
    googleLoginUser: () => Promise<any>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export interface IUser {
    _id:string;
    name: string;
    email: string;
    password?: string;
    phone?: string;
    picture?: string;
    address?: string;
    university?:string;
    role: "admin" | "user";
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [userDB, setUserDB] = useState<IUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const axiosPublic = useAxiosPublic();

    const googleProvider = new GoogleAuthProvider();

    const userCreate = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userLogin = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name: string, photo: string) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });
        }
        return Promise.reject("No user is currently signed in.");
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleLoginUser = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [axiosPublic]);

    const authInfo: AuthContextType = {
        user,
        loading,
        userDB,
        setUserDB,
        setLoading,
        userCreate,
        userLogin,
        updateUserProfile,
        logOut,
        googleLoginUser,
    };



    if (!AuthContext) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
