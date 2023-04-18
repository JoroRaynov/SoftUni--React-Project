import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import './Header.css'

export default function Header() {

    const { isAuthenticated, userEmail } = useAuthContext();
    return (
        <header className="header">
            <nav className="nav">

                <Link to={"/"} className="message" >
                    <img className="logo" src={require("./olx-logo.png")} alt="olx-logo" />
                </Link >
                <ul className="listItems">
                    {isAuthenticated && (<>
                        <li className="listItem">
                            <i className="fa-regular fa-comment"></i>
                            <Link to={"/"} className="message" >Съобщения</Link >
                        </li>
                        <li className="listItem">
                            <Link to={"/"} className="message" ><i className="fa-regular fa-heart"></i>
                            </Link >
                        </li>
                        <li className="listItem">
                            <Link to={"/"} className="message" > <i className="fa-regular fa-user"></i>Твоят Профил</Link >
                        </li>
                        <Link to={"/data/catalog/new"} className="primary addAd">Добави обява</Link>
                        <li className="listItem">
                            <Link to={"/auth/logout"} className="message" >Изход <i className="fa-solid fa-arrow-right-from-bracket"></i></Link >
                        </li>
                    </>)}

                    {!isAuthenticated &&
                        <>
                            <li className="listItem">
                                <Link to={"/auth/login"} className="message" >Влез</Link >
                            </li>
                            <li className="listItem">
                                <Link to={"/auth/register"} className="message" >Регистрирай се</Link >
                            </li>
                        </>}
                    {/* 
                    <li className="listItem">
                        <Link to={"/"} className="message" ><i className="fa-regular fa-heart"></i>
                        </Link >
                    </li>
                    <li className="listItem">
                        <Link to={"/auth/login"} className="message" >Влез</Link >
                    </li>
                    <li className="listItem">
                        <Link to={"/auth/register"} className="message" >Регистрирай се</Link >
                    </li>
                    <li className="listItem">
                        <Link to={"/"} className="message" >Твоят Профил</Link >
                    </li>
                    <Link to={"/data/catalog/new"} className="primary addAd">Добави обява</Link> */}
                </ul>
                {/* {isAuthenticated &&
                    (<>

                        <li className="listItem">
                            <Link to={"/"} className="message" ><i className="fa-regular fa-heart"></i>
                            </Link >
                        </li>
                        <li className="listItem">
                            <Link to={"/"} className="message" > <i class="fa-regular fa-user"></i>Твоят Профил</Link >
                        </li>
                        <Link to={"/data/catalog/new"} className="primary addAd">Добави обява</Link>
                    </>)
                } */}


            </nav>
        </header>
    );

}