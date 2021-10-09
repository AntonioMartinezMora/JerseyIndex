import { Link } from 'react-router-dom'
import '../Style/Navbar.css';
import { useGlobalContext } from '../context';
// Import icons
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const {openMenu, setOpenMenu} = useGlobalContext()

    return (
        <nav className="navbar">
            <Link 
                to="/"
                className="logo"
            >
                JerseysIndex
            </Link>
            <div className="nav__icons">
                <div className="social">
                    <Link
                        to="#"
                        className="social__icon"
                    >
                        <FaTwitter  />
                    </Link>
                    <Link
                        to="#"
                        className="social__icon"
                    >
                        <FaInstagram  />
                    </Link>
                </div>
                <div 
                    className="menu"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu? <AiOutlineClose className="menu__icon"/> :<AiOutlineMenu className="menu__icon"/>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
