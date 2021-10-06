import {useEffect, useState} from 'react';
import { Link, useParams} from "react-router-dom";
import data from '../data.json'

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
              short
            } = item
            const newJersey = {
              id, image, index, team, short
            }
            // console.log(newJersey)
            return<Link
              to={`/jerseys/${id}`}
              key={newJersey.index}
            >
              <h3>{newJersey.id}</h3>
            </Link>
          }
        })}
    </div>
  )
  
} 

export default Team;

// display team NAME