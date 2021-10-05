import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Teams({teams}) {
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