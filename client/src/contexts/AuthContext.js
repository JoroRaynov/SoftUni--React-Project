import { createContext, useContext, useState } from "react";

import { useLocalStorage } from "../Hooks/Form/useLocalStorage";
import * as authService from '../services/authService'

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const onRegisterSubmit = async (values) => {
        const { rePass, ...registerData } = values;
        if (rePass !== registerData.password) {
            return;
        }
        try {

            const result = await authService.register(registerData);

            if (result.message) {
                console.log(result)
            }
            setAuth(result);


        } catch (error) {
            console.log('Something went wrong' + error);
        }

    }

    const contextValues = {
        onRegisterSubmit,
        userId: auth.token?._id,
        token: auth.token?.accessToken,
        userEmail: auth.token?.email,
        isAuthenticated: !!auth.token?.accessToken,
        errors: [auth.message]
    }

    return (
        <>
            <AuthContext.Provider value={contextValues} >
                {children}
            </AuthContext.Provider>
        </>
    );


}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}