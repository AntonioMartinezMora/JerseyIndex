import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
import Teams from '../Components/Teams';
import PageMenu from '../Components/PageMenu';

function Home() {
  const {shortTeams} = useGlobalContext()

  return<main>
      <PageMenu/>
    </main>
  
} 

export default Home;
