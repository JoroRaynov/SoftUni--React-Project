import { createContext, useContext, useState } from "react";
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

    const onRegisterSubmit = async (values) => {
        const { rePass, ...registerData } = values;
        console.log(Object.values(registerData));
        if (rePass !== registerData.password) {
            return;
        }
        if (Object.values(registerData).some(x => x === '')) {
            return ;

        }
        try {

            const result = await authService.register(registerData);

            if (result.message) {
                console.log(result)
                return setServerErrors(result.message);

            }
            setAuth(result);

            navigate('/')

        } catch (error) {
            console.log('Something went wrong' + error.msg);
        }

    }

    const onLoginSubmit = async (values) => {
        if (Object.values(values).some(x => x === '')) {
            return ;

        }
        try {

            const result = await authService.login(values);
            if (result.message) {
                return setServerErrors(result.message);
            }
            setAuth(result);
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    const onLogOut = async () => {
        await authService.logout();
        setAuth({})
    }


    const contextValues = {
        onRegisterSubmit,
        userId: auth.token?._id,
        token: auth.token?.accessToken,
        userEmail: auth.token?.email,
        isAuthenticated: !!auth.token?.accessToken,
        serverErrors,
        setServerErrors,
        onLoginSubmit,
        onLogOut
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