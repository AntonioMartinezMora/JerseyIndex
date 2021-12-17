import React from 'react';
import { useGlobalContext } from '../context';
import '../Style/HeroImage.css';
import { Link } from 'react-router-dom';

function HeroImage() {
    const {openPageMenu, setOpenPageMenu} = useGlobalContext()

    return(
        <div className="hero__img">
            <div className="hero__content">
                <h1>Every nba jersey from nike since 2017</h1>
                <p>Browse all the NBA jerseys for every team in the league since 2017 when Nike became the apparel provider for the NBA.</p>
                <button 
                    className="check__btn"
                    // onClick={() => setOpenPageMenu(!openPageMenu)}
                    onClick={()=> console.log('jeje')}
                >
                    Check a team
                </button>
            </div>
        </div>
    )
  
} 

export default HeroImage;