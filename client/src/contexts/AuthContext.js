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

    const modifyServerErrors = (value) => {
        setServerErrors(value)
    }

    const onRegisterSubmit = async (values) => {
        const { rePass, ...registerData } = values;
        console.log(registerData)
        if (rePass !== registerData.password) {
            return;
        }
        try {

            const result = await authService.register(registerData);

            if (result.message) {
                return setServerErrors(result.message);

            }
            setAuth(result);
            // setErr
            navigate('/')

        } catch (error) {
            console.log('Something went wrong' + error.msg);
        }

    }

    const onLoginSubmit = async (values) => {

        try {

            const result = await authService.login(values);
            if (result.message) {
                return setServerErrors(result.message);
            }
            setAuth(result);
            navigate('/')

        } catch (error) {
            console.log('Unsuccessful login!')
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
        modifyServerErrors,
        onLoginSubmit
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