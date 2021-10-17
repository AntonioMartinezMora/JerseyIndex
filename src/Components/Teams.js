import React, {useEffect, useState} from 'react';
import '../Style/Teams.css';
import { Link } from 'react-router-dom';

function Teams({teams}) {
    // console.log(teams)

    return(
        <div className="teams__btn--container">
            {teams.map((team, index) =>{
                return(
                    <Link
                        to={`/teams/${team}`}
                        key={index}
                    >
                        {team}
                    </Link>
                )
            })}
        </div>
    )
  
} 

export default Teams;