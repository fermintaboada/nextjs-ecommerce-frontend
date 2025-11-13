"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { userSessionInterface } from "../interfaces/IUserSession";

interface AuthContextProps {
    dataUser: userSessionInterface | null;
    setDataUser: (dataUser: userSessionInterface | null) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: React.ReactElement;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [dataUser, setDataUser] = useState<userSessionInterface | null>(null);

    useEffect(() => {
       // se ejecutara cuando dataUser cambie, y tomara esa info y la almacenara en el localstorage 
        if (dataUser) {
            localStorage.setItem('userSession', JSON.stringify(dataUser));
        }
    }, [dataUser]);

    useEffect(() => {
        // este useEffect se encargara de extraer la info del localstorage y almacenarla en el state 
        if (typeof window !== 'undefined' && window.localStorage){
            const UserInfo = localStorage.getItem('userSession');
            if(UserInfo){
                setDataUser(JSON.parse(UserInfo));
            }
        }
    }, [])

    const logout = () => {
        setDataUser(null);
        if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('userSession');
        }
    };

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const UseAuth = () => useContext(AuthContext);