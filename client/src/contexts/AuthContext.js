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
            setAuth(result);
            console.log(auth.token.accessToken)

        } catch (error) {
            console.log('Something went wrong' + error);
        }

    }
    console.log('AUTH')
    console.log(auth)
    const contextValues = {
        onRegisterSubmit,
        userId: auth.token?._id,
        token: auth.token?.accessToken,
        userEmail: auth.token?.email,
        isAuthenticated: !!auth.token?.accessToken
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