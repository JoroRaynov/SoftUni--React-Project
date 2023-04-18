import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';


import * as adService from '../services/adsService'
import { useAuthContext } from '../contexts/AuthContext'


export const AdContext = createContext();

export const AdProvider = ({
    children
}) => {
    const navigate = useNavigate();

    const { token, modifyServerErrors, serverErrors } = useAuthContext()

    const [ads, setAds] = useState([]);
    useEffect(() => {

        adService.getAll()
            .then(result => {
                setAds(result);
            })
    }, [])
    const createGame = async (data) => {
        const result = await adService.create(data, token);
        if (result.message) {
            return modifyServerErrors(result.message)
        }
        setAds(a => ([...a, result]));
        navigate('/');
    }

    const contextValues = {
        ads,
        createGame
    };

    return (
        <AdContext.Provider value={contextValues}>
            {children}
        </AdContext.Provider>
    );
}

export const useAdContext = () => {
    const context = useContext(AdContext);

    return context;
}