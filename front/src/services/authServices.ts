/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginFormValuesInterface } from "@/validators/LoginSchema";
import { RegisterFormValuesInterface } from "@/validators/RegisterSchema";

export const registerUserService = async (userData: RegisterFormValuesInterface) => {
    try {
        const response = await fetch(`http://localhost:3001/users/register`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData),
        });
        if(response.ok){
            return response.json();
        }
        else{
            alert("Ups! No pudimos registrarte");
            throw new Error('Error en el registro');
        }
    } catch (error: any) {
        throw new Error(error)
        
    }
};

export const loginUserService = async (userData: LoginFormValuesInterface) => {
    try {
        const response = await fetch(`http://localhost:3001/users/login`,{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData),
        });
        if (response.ok){
            return response.json();
        } else {
            alert("Error en el inicio de sesión. Revisa tus credenciales.");
            throw new Error('Error en el inicio de sesión');
        }
    } catch (error: any) {
        throw new Error(error);
    }
};