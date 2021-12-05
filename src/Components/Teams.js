import React, {useEffect, useState} from 'react';
import '../Style/Teams.css';
import { Link } from 'react-router-dom';

function Teams({teams}) {
    // console.log(teams)

    return(
        <div className="teams__btn--container">
            {teams.sort().map((team, index) =>{
                if(team !== undefined){
                return(
                    <Link
                        to={`/teams/${team}`}
                        key={index}
                        className="team__name--btn"
                    >
                        {team}
                    </Link>
                )
                }
            })}
        </div>
    )
  
} 

export default Teams;