import React from 'react';
import '../Style/Modal.css';
import {AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from '../context';

function Modal() {
    const {openMenu, setOpenMenu} = useGlobalContext()

    return<div 
            className={openMenu ? "modal__container":"modal__container--close"}
            >
        <h2>Modal aqui</h2>
        <AiOutlineClose 
            onClick={() => setOpenMenu(false)}
            className="modal__icon"
        />
        </div>
  
} 

export default Modal;