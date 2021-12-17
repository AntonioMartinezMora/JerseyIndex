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
        if(item.short !== null){
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
                BB Jerseys
            </Link>
            <div className="nav__icons">
                <div 
                    className="menu"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <AiOutlineMenu className="menu__icon"/>
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
                        >
                            {team}
                        </Link>
                    )
                    }
                })}
            </div>
        </div>
    </div>
        
        
    )
}

export default Navigation;