import React from 'react';
import { Link, useParams} from "react-router-dom";
import data from '../data.json'
import '../Style/App.css'; 
import '../Style/Team.css'
import PageMenu from '../Components/PageMenu';
import MenuBtn from '../Components/MenuBtn';

function Team() {
  const { team } = useParams()

  return(
    <div>
      <PageMenu />
      <MenuBtn />
        {data.map((item) =>{
          if(item.short === team){
            const {
              id,
              image,
              index,
              team,
              short,
              edition,
              year
            } = item
            const newJersey = {
              id, image, index, team, short, edition, year
            }
            // console.log(newJersey)
            return<Link
              to={`/jerseys/${id}`}
              key={index}
            >
              <div className="jersey__link--info">
                <img src={image} />
                <div className="jerseys__info">
                  <h3>{team} {year} {edition} jersey</h3>
                </div>
              </div>
            </Link>
          }
        })}
    </div>
  )
  
} 

export default Team;

