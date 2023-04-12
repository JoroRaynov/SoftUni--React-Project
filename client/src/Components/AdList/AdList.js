import { AdItem } from "./AdItem/AdItem";

export const AdList = ({
    games
}) => {

    return (
        <>
            <section id="cards">

                {games.map(game => <AdItem key={game._id} {...game} />)}

            </section >
        </>
    );
}