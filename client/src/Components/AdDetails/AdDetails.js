import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './AdDetails.css'
import * as adsService from '../../services/adsService';
// import * as authService from '../../services/authService'
import { useAuthContext } from '../../contexts/AuthContext';

export const AdDetails = () => {
    const { userId } = useAuthContext();
    const [ad, setAd] = useState({});
    // const [owner, setOwner] = useState({})
    const { adId } = useParams();
    useEffect(() => {
        adsService.getOne(adId)
            .then((result) => {
                setAd(result);
                console.log('Before owner ID');

                console.log(ad)

            })
        // .then(result => {

        //     return setOwner(async () => {
        //         await authService.getUserById(result._ownerId)
        //     })
        // })

    }, [adId]);
    const isOwner = ad._ownerId?._id === userId;


    // setOwner(ow);
    console.log(ad)
    return (
        <>
            <section className="details">
                <div className="detailsContainer">
                    <img className="descriptionImg" src={ad.imageUrl} alt="img" />
                    <article className="userInfoWrapper">
                        <h3 className="userInfoTitle">
                            Потребител
                        </h3>
                        <div className="userInfo">
                            <div className="userInfoImgWrapper">
                                <img className="userAvatar" src={require("./assets/Untitled.png")} alt="avatar" />
                            </div>
                            <div className="userInfoContacts">
                                {ad._ownerId?.email &&
                                    <h3 className="userInfoDetails-email">
                                        {ad._ownerId?.email}
                                    </h3>}

                                {ad._ownerId?.tel &&
                                    <h3 className="userInfoDetails-email">
                                       Телефон: {ad._ownerId?.tel}
                                    </h3>
                                }
                                {ad._ownerId?.location &&
                                    <h3 className="userInfoDetails-email">
                                       Гр: {ad._ownerId?.location}
                                    </h3>
                                }
                            </div>
                        </div>

                        {isOwner &&
                            (<div className="ownerOptions">
                                <button className="ownerBtns edit"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                                <button className="ownerBtns delete"><i className="fa-regular fa-trash-can"></i>Delete</button>
                            </div>
                            )}
                        {!isOwner && (<div className="contactBtns">
                            <button className="call">Обади се</button>
                            <button className="call msg">Съобщение</button>
                        </div>)}

                        <Link className="allUserAds" to={`/data/user/${ad._ownerId?._id}/catalog`}>
                            Всички обяви на този потребител
                            {/* ${apiURL}/ads/catalog?where=_ownerId%3D%22${id}%22 */}
                        </Link>

                    </article>

                </div >
                <div className="descriptioContainer">
                    <h2 className="descriptionTitle">
                        {ad.title}
                    </h2>
                    <h2 className="descriptionPrice">
                        {ad.price}
                    </h2>
                    <h2 className="desc">
                        Описание
                    </h2>
                    <p className="description">
                        {ad.description}
                    </p>
                </div>
            </section >
        </>
    );
}