import { useAdContext } from '../../contexts/AdContext';

import './Home.css';
import { SearchBar } from './SearchBar/SearchBar';
import { AdList } from '../AdList/AdList';

export const Home = () => {
    const { ads } = useAdContext();

    return (
        <>
            <SearchBar />
            <AdList ads={ads} />
        </>
    );
}