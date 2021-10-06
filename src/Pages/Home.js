import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
import Teams from '../Components/Teams';

function Home() {
  const {shortTeams} = useGlobalContext()

  return<main>
      <Teams teams={shortTeams}/>
    </main>
  
} 

export default Home;
