import { createContext, useState, useEffect, useContext  } from "react";

import * as adService from '../services/adsService'


export const AdContext = createContext();

export const AdProvider = ({
    children
}) => {
    const [ads, setAds] = useState([]);
    useEffect(() => {

        adService.getAll()
            .then(result => {
                setAds(result);
            })
    }, [])

    const createGame = (value) => {
        console.log(value);

    }

    const contextValues = {
        ads,
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