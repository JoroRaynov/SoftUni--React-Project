import './Header.css'

export default function Header (){

 return (
    <header className="header">
        <nav className="nav">
            <img className="logo" src={require ("./olx-logo.png")} alt="olx-logo" />
            <ul className="listItems">
                <li className="listItem">Съобщения</li>
                <li className="listItem">3</li>
                <li className="listItem">Твоят Профил</li>
                <button className="primary addAd">Добави обява</button>
            </ul>
        </nav>
    </header>
);

}