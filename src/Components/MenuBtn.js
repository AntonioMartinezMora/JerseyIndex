import React from 'react';
import '../Style/MenuBtn.css';
import { useGlobalContext } from '../context';

function MenuBtn() {
    const {openPageMenu, setOpenPageMenu} = useGlobalContext()

    return <button
        className="open__btn"
        onClick={() => setOpenPageMenu(!openPageMenu)}
    >
        Open Menu
    </button>
    
} 

export default MenuBtn;