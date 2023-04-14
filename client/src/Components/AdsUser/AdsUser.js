import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as adsService from '../../services/adsService'
import { AdUserItem } from './AdUserItem/AdUserItem';

export const AdsUser = () => {
    const [ads, setAds] = useState([]);
    const { userId } = useParams();
    useEffect(() => {
        adsService.getAllUserAds(userId)
            .then((result) => {
                setAds(result)

            })
    }, [userId])
    return (
        <>
            <section className="cards">

                {ads.map(a => <AdUserItem key={a._id} {...a} />)}
            </section>

        </>
    );
}