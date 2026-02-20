"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { userSessionInterface } from "../interfaces/IUserSession";

interface AuthContextProps {
    dataUser: userSessionInterface | null;
    setDataUser: (dataUser: userSessionInterface | null) => void;
    logout: () => void;
    loading: boolean; 
};

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => {},
    logout: () => {},
    loading: true, 
});

interface AuthProviderProps {
    children: React.ReactElement;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [dataUser, setDataUser] = useState<userSessionInterface | null>(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        if (dataUser) {
            localStorage.setItem('userSession', JSON.stringify(dataUser));
        }
    }, [dataUser]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage){
            const UserInfo = localStorage.getItem('userSession');
            if(UserInfo){
                setDataUser(JSON.parse(UserInfo));
            }
            setLoading(false);
        }
    }, [])

    const logout = () => {
        setDataUser(null);
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.removeItem('userSession');
        }
    };

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

export const UseAuth = () => useContext(AuthContext);