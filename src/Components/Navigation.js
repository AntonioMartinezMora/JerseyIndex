import React,{useState} from "react";
import data from '../data.json'
import {Link} from 'react-router-dom'
import '../Style/Navigation.css';
// Import icons
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = () =>{
    const [openMenu, setOpenMenu] = useState(false)

    // Filter and display short teams name
    const shortNames = [...new Set(data.map((item) => {
        if(item.short !== "asg"){
            return item.short
        }
    } ))]

    return(
    <div className="navigation">
        <nav className="nav__bar">
            <Link 
                to="/"
                className="logo"
            >
                <img src="https://media.publit.io/file/w_1280/Resour/JerseySocietyLogo-1.png"/>
            </Link>
            <div className="nav__icons">
                <div 
                    className="menu"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <AiOutlineMenu
                        className={openMenu ? "menu__icon hide" : "menu__icon"}
                    />
                    <AiOutlineClose 
                        className={openMenu ? "menu__icon" : "menu__icon hide"}
                    />
                </div>
            </div>
        </nav>
        <div className={openMenu ? "accordion open" : "accordion"}>
            <div className="teams__short--container"
            >
                {shortNames.sort().map((team, index) =>{
                    if(team !== undefined){
                    return(
                        <Link
                            to={`/teams/${team}`}
                            key={index}
                            className="team__short--btn"
                            onClick={()=> setOpenMenu(false)}
                        >
                            {team}
                        </Link>
                    )
                    }
                })}
            </div>
            <div className="menu__links">
                <Link
                    to={`/all-star`}
                    className="menu__link"
                    onClick={()=> setOpenMenu(false)}
                >
                    All Star Game
                </Link>
            </div>
            <div className="social__icons">
                <Link
                    to={"#"}
                    className="social__icon"
                >
                    <FaTwitter/>
                </Link>
                <Link
                    to={"#"}
                    className="social__icon"
                >
                    <FaInstagram/>
                </Link>
            </div>
        </div>
    </div>
        
        
    )
}

export default Navigation;