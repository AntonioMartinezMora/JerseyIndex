import React from "react";
import {Link} from 'react-router-dom'
import '../Style/Footer.css';

const Footer = () =>{
    const year = new Date().getFullYear()

    return <footer>
        <div>
        &copy; {year} JerseySociety.co 
        </div>
        <div className="footer__info">
            <div className="footer__col">
                <Link
                    to={"/about"}
                    className="footer__link"
                >
                    About
                </Link>
                <Link
                    to={"/terms"}
                    className="footer__link"
                >
                    Terms
                </Link>
            </div>
            <div className="footer__col">
                <a 
                    href={"https://twitter.com/societyjersey"}
                    target="_blank"
                    className="footer__link"
                >
                    Twitter
                </a>
                <a 
                    href={"https://www.instagram.com/societyjersey/"}
                    target="_blank"
                    className="footer__link"
                >
                    Instagram
                </a>
            </div>
        </div>
    </footer>
}

export default Footer