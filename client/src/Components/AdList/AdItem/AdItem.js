import './AdItem.css'

export const AdItem = ({
    _id,
    imageUrl,
    title,
    category,
    price,
    location
}) => {

    return (
        <>
            <article className="card">
                <div className="cardPictureWrapper">
                    <img className="cardImg" src={imageUrl} alt="" />
                </div>
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
                        <span>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                    </div>

                </div>
            </article>
        </>
    );
}