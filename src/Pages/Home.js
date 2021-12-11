import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
import Teams from '../Components/Teams';
import PageMenu from '../Components/PageMenu';
import HeroImage from '../Components/HeroImage';
import '../Style/Home.css';

function Home() {
  const {shortTeams} = useGlobalContext()

  return<main>
      <PageMenu/>
      <HeroImage />
    </main>
  
} 

export default Home;
