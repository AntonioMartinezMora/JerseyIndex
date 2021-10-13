import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import data from '../data.json'
import '../Style/App.css'; 
import '../Style/Jersey.css'; 
// import Teams from '../Components/Teams';
import PageMenu from '../Components/PageMenu';
import MenuBtn from '../Components/MenuBtn';
import { useGlobalContext } from '../context';

function Jersey() {
  const {id} = useParams()
  const {setOpenPageMenu, shortTeams} = useGlobalContext()

  useEffect(() =>{
    setOpenPageMenu(false)
  },[])

  // console.log(id)

  return(
    <div>
    <PageMenu />
    <MenuBtn />
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
        // console.log(index)
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
            
            <button>
              <a 
                href={link}
                target="_blank"
                className="find__btn"
              >
                Find this jersey
              </a>
            </button>
          </div>
            
        </div>
      }
    })}
</div>
  )
  
} 

export default Jersey;

