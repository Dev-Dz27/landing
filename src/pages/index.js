import React, {useState} from 'react'
import NavBar from '../components/Header'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Sidebar from '../components/Sidebar'
import { homeObjOne,  homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import ContactUs  from './ContactUs';


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
     <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <NavBar toggle={toggle}/>
     <HeroSection />
     <InfoSection {...homeObjOne} />
     <InfoSection {...homeObjTwo} />
     <Services />
     <ContactUs />

     </>
   
  )
}

export default Home