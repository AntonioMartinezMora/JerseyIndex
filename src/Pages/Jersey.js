import {useEffect} from 'react';
import { Link, useParams} from "react-router-dom";
import data from '../data.json'
import '../Style/App.css'; 
import '../Style/Jersey.css'; 
import Popular from '../Components/Popular';
import { useGlobalContext } from '../context';
import Footer from '../Components/Footer';

function Jersey() {
  const {id} = useParams()
  const {setOpenPageMenu, shortTeams} = useGlobalContext()

  useEffect(() =>{
    handleClick()
  },[])

    const handleClick = () =>{
      setOpenPageMenu(false)
      window.scrollTo(0, 0)
      console.log('jeje')
    }

  // console.log(id)

  return(
    <div className="jersey__page">
    {data.map((item) =>{
      if(item.id === id){
        const {
          id,
          image,
          index,
          team,
          edition,
          year,
          brand,
          link
        } = item
        const newJersey = {
          id, image, index, team, edition, year, brand,link
        }
        console.log(index)
        return <div key={index} className="jersey__container">
          <img src={image} />
          <div className="jersey__info">
            <div className="info">
              <h3>Team</h3> <small>{team}</small>
            </div>
            <div className="info">
              <h3>Edition</h3> <small>{edition}</small>
            </div>
            <div className="info">
              <h3>Year</h3> <small>{year}</small>
            </div>
            <div className="info">
              <h3>Brand</h3> <small>{brand}</small>
            </div>
            
            <button 
                className={link ? "find__btn" : "find__btn hide"}
            >
              <a 
                href={link}
                target="_blank"
              >
                Find this jersey
              </a>
            </button>
          </div>

          <div className="sidebar">
            <Link
              to={"/all-star"}
              key={999}
              className="asg__link"
            >
              <img src="https://media.publit.io/file/Resour/asg_small.png"/>
              <h4>all star game jerseys</h4>
            </Link>
          </div>
            
        </div>
      }
    })}
    <Popular />
  </div>
  )
  
} 

export default Jersey;

