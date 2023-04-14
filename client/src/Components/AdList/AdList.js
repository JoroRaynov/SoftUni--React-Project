import { AdItem } from "./AdItem/AdItem";

export const AdList = ({
    ads
}) => {

    return (
        <>
            <h2 className="lastAds">Последни Обяви</h2>
            <section className="cards">
                {ads.map(ad => <AdItem key={ad._id} {...ad} />)}

{/* 
                <article className="card">
                    <div className="cardPictureWrapper">
                        <img className="cardImg" src="imageUrl" alt="" />
                    </div>
                    <div className="cardDescWrapper">
                        <p className="cardTitle">
                            title
                        </p>
                        <p className="cardLocation">
                            location
                        </p>
                        <div className="cardFooter">
                            <span className="cardPrice">
                                price
                            </span>
                            <span>
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>

                    </div>
                </article> */}

            </section >
        </>
    );
}