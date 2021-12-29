import React,{ useState} from 'react';
import { Link, useParams} from "react-router-dom";
import data from '../data.json'
import teamsData from '../teamsData.json'
import '../Style/App.css'; 
import '../Style/Team.css'

function Team() {
  const { team } = useParams()
  const [filterJerseys, setFilterJerseys] = useState(false)

  return(
    <div className='team__page--cont'>
      <div className="team__name">
        <h2 className="title">
          {teamsData.map((item) =>{
            if(item.short === team){
              return item.city
            }
          })}
        </h2>
        <div className="filter">
        <input 
          type="checkbox"  
          id="checkbox" 
          onChange={() => setFilterJerseys(!filterJerseys)}
        />
        <label htmlFor="checkbox" className={filterJerseys ? "label active" : "label"}>
          <div className="filtered"></div>
        </label>
        <small>{filterJerseys ? "Show All Jerseys" : "Show Only City Edition"}</small>
      </div>
      </div>
     
      <div className={filterJerseys ? "jerseys__container hide" : "jerseys__container"}>
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
      <div className={filterJerseys ? "jerseys__container" : "jerseys__container hide"}>
        {data.map((item) =>{
          if(item.short === team && item.edition === "city"){
            const {
              id,
              image,
              index,
              team,
              short,
              edition,
              year
            } = item
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

export default Team;

