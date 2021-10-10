import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import data from '../data.json'
import '../Style/App.css'; 
import PageMenu from '../Components/PageMenu';
import MenuBtn from '../Components/MenuBtn';
import { useGlobalContext } from '../context';

function Jersey() {
  const {id} = useParams()
  const {setOpenPageMenu} = useGlobalContext()

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
        return <div key={index}>
          <img src={image} />
          <div className="jersey__info">
            <h3>Team</h3> <small>{team}</small>
            <h3>Edition</h3> <small>{edition}</small>
            <h3>Year</h3> <small>{year}</small>
            <h3>Brand</h3> <small>{brand}</small>
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

