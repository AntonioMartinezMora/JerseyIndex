import React,{ useState} from 'react';
import { Link} from "react-router-dom";
import data from '../data.json'
import '../Style/App.css'; 
import '../Style/Team.css'

function AllStar() {
  const [filterJerseys, setFilterJerseys] = useState(false)

  return(
    <div className='team__page--cont'>
      <div className="team__name">
        <h2 className="title">
            All Star game
        </h2>
      </div>
     
      <div className="jerseys__container">
        {data.map((item) =>{
          if(item.short === "asg"){
            const {
              id,
              image,
              index,
              team,
              short,
              edition,
              year
            } = item
            console.log(item)
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
          }
        })}
      </div>
        
    </div>
  )
  
} 

export default AllStar;

