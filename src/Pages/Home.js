import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
import Teams from '../Components/Teams';

function Home() {
  const {teams} = useGlobalContext()

  return<main>
      <Teams teams={teams}/>
    </main>
  
} 

export default Home;
