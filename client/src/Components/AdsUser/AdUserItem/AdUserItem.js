import { Link } from 'react-router-dom';

import './AdUserItem.css'

export const AdUserItem = ({
    imageUrl,
    title,
    location,
    price,
    _id
}) => {
    return (
        <>
                <article className="card">
                    <Link to={`/data/${_id}/details`} >
                        <div className="cardPictureWrapper">
                            <img className="cardImg" src={imageUrl} alt="" />
                        </div>

                    </Link>
                    <div className="cardDescWrapper">
                        <p className="cardTitle">
                            {title}
                        </p>
                        <p className="cardLocation">
                            {location}
                        </p>
                        <div className="cardFooter">
                            <span className="cardPrice">
                                {price}
                            </span>
                            <Link to={""}>
                                <span>
                                    <i className="fa-regular fa-heart"></i>
                                </span>
                            </Link>
                        </div>

                    </div>
                </article>
        </>
    )
}