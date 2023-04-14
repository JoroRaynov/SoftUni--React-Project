import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from "../Hooks/Form/useLocalStorage";
import * as authService from '../services/authService'

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
  
    const navigate = useNavigate();
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [serverErrors, setServerErrors] = useState([]);

    const resetServerErrors = (value) => {
        setServerErrors(value)
    }
    
    const onRegisterSubmit = async (values) => {
        const { rePass, ...registerData } = values;
        if (rePass !== registerData.password) {
            return;
        }
        try {

            const result = await authService.register(registerData);

            if (result.message) {
                console.log(result.message);
                return setServerErrors(result.message);

            }
            setAuth(result);
            // setErr
            navigate('/')

        } catch (error) {
            console.log('Something went wrong' + error.msg);
        }

    }

    const contextValues = {
        onRegisterSubmit,
        userId: auth.token?._id,
        token: auth.token?.accessToken,
        userEmail: auth.token?.email,
        isAuthenticated: !!auth.token?.accessToken,
        serverErrors,
        setServerErrors,
        resetServerErrors
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