import React from 'react';
import '../Style/PageMenu.css';
import { useGlobalContext } from '../context';

function PageMenu() {
    const {openPageMenu, setOpenPageMenu} = useGlobalContext()

    return<div className={openPageMenu ? "page__menu open":"page__menu"}>
        <h2>PageMenu aqui no</h2>
    </div>
    
} 

export default PageMenu;
