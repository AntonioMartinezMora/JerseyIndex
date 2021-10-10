import React from 'react';
import '../Style/MenuBtn.css';
import { useGlobalContext } from '../context';

function MenuBtn() {
    const {openPageMenu, setOpenPageMenu} = useGlobalContext()

    return <button
        className="open__btn"
        onClick={() => setOpenPageMenu(!openPageMenu)}
    >
        {openPageMenu ? "close menu":"open menu"}
    </button>
    
} 

export default MenuBtn;
