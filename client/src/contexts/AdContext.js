import { createContext, useState, useEffect, useContext } from "react";

import * as adService from '../services/adsService'
import { useAuthContext } from '../contexts/AuthContext'


export const AdContext = createContext();

export const AdProvider = ({
    children
}) => {
    const { token } = useAuthContext()

    const [ads, setAds] = useState([]);
    useEffect(() => {

        adService.getAll()
            .then(result => {
                setAds(result);
            })
    }, [])
    const createGame = async (data) => {
        const result = await adService.create(data, token);
        console.log(result)

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