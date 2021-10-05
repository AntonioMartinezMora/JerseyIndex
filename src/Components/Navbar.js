import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar">
            <Link 
                to="/"
            >
                JerseysIndex
            </Link>
        </nav>
    )
}

export default Navbar