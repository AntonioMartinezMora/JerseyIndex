import React from 'react';
import '../Style/PageMenu.css';
import { useGlobalContext } from '../context';
import Teams from './Teams';

function PageMenu() {
    const {openPageMenu, shortTeams} = useGlobalContext()

    return<div className={openPageMenu ? "page__menu open":"page__menu"}>
        <Teams teams={shortTeams}/>
    </div>
    
} 

export default PageMenu;

