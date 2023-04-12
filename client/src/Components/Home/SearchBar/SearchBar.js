import './SearchBar.css'

export const SearchBar = () => {

    return (
        <div className="searchFormWrapper">
            <form className="searchForm" action="">
                <input type="text" className="searchText sInput" placeholder='Търсене'/>
                <input type="text" className="location sInput" placeholder='Локация'/>
                <button className="primary sInput">
                    Търсене
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
}