import React from "react";
import {Link} from 'react-router-dom'
import '../Style/Footer.css';

const Footer = () =>{
    const year = new Date().getFullYear()

    return <footer>
        <div>
        &copy; {year} BBallJersys.com
        </div>
        <div className="footer__info">
            <div className="footer__col">
                <Link
                    to={'#'}
                    className="footer__link"
                >
                    About Us
                </Link>
                <Link
                    to={'#'}
                    className="footer__link"
                >
                    Terms
                </Link>
            </div>
            <div className="footer__col">
                <Link
                    to={'#'}
                    className="footer__link"
                >
                    Twitter
                </Link>
                <Link
                    to={'#'}
                    className="footer__link"
                >
                    Instagram
                </Link>
            </div>
        </div>
    </footer>
}

export default Footer