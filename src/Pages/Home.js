import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context'; 
// Components
import HeroImage from '../Components/HeroImage';
import Popular from '../Components/Popular';
// Style
import '../Style/Home.css';
import Footer from '../Components/Footer';

function Home() {
  const {shortTeams} = useGlobalContext()

  return<main>
      <HeroImage />
      <Popular />
    </main>
  
} 

export default Home;
