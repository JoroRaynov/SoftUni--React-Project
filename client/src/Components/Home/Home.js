import { useState, useEffect } from 'react';

import * as adService from '../../services/adsService'

import './Home.css';
import { SearchBar } from './SearchBar/SearchBar';
import { AdList } from '../AdList/AdList';

export const Home = () => {

    const [games, setGames] = useState([]);
    useEffect(() => {

        adService.getAll()
            .then(result => {
                setGames(result);
                console.log(result);
            })
    }, [])
    return (
        <>
            <SearchBar />
            <AdList games={games} />
        </>
    );
}