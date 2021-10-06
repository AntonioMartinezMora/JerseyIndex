import {useEffect, useState} from 'react';
import { Link, useParams} from "react-router-dom";
import data from '../data.json'
import '../Style/App.css'; 
import '../Style/Team.css'

function Team() {
  const { team } = useParams()
  const [items, setItems] = useState([])

  return(
    <div>
        {data.map((item) =>{
          if(item.short === team){
            const {
              id,
              image,
              index,
              team,
              short,
              type,
              year
            } = item
            const newJersey = {
              id, image, index, team, short, type, year
            }
            // console.log(newJersey)
            return<Link
              to={`/jerseys/${id}`}
              key={index}
            >
              <div className="jersey__info">
                <img src={image} />
                <div className="jerseys__info">
                  <h3>{team} {year} {type} jersey</h3>
                </div>
              </div>
            </Link>
          }
        })}
    </div>
  )
  
} 

export default Team;

// display team NAME