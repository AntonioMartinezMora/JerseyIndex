import React from "react";
import data from '../data.json'
import {Link} from 'react-router-dom'
// Style
import '../Style/App.css'
import '../Style/Popular.css';

function Popular(){
  const popularJerseys = [...new Set(data.map((item)=>{
    if(item.favorite === 'yes'){
      return item
    }
  }))]

    return <div className="popular__cont">
        <h2 className="title">
            popular jerseys
        </h2>
        <div className="jerseys__container">
            {popularJerseys.slice(1).sort((a,b) => 0.5 - Math.random()).map((jersey) => {
                const {
                    id,
                    image,
                    index,
                    team,
                    edition,
                    year,
                    brand,
                    link
                } = jersey
                return<Link
                to={`/jerseys/${id}`}
                key={index}
                className="jersey__link"
              >
                <div className="jersey__link--info">
                  <img src={image} />
                  <div className="jerseys__info">
                    <h3>{team} {year} {edition} jersey</h3>
                  </div>
                </div>
              </Link>
            })}
        </div>
    </div>
}

export default Popular;
