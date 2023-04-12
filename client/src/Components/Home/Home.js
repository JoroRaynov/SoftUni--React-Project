import { useState, useEffect } from 'react';
import { useContext } from 'react';

import {useAdContext } from '../../contexts/AdContext';
import * as adService from '../../services/adsService'

import './Home.css';
import { SearchBar } from './SearchBar/SearchBar';
import { AdList } from '../AdList/AdList';

export const Home = () => {
    const { ads } = useAdContext();
    // const [games, setGames] = useState([]);
    // useEffect(() => {

    //     adService.getAll()
    //         .then(result => {
    //             setGames(result);
    //             console.log(result);
    //         })
    // }, [])
    return (
        <>
            <SearchBar />
            <AdList ads={ads} />
        </>
    );
}