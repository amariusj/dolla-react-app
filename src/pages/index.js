import React, {useState} from 'react'

import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ServicesSection from '../components/ServicesSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import ScrollToTop from '../components/ScrollToTop'

import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} id='about' />
            <InfoSection {...homeObjTwo} id="discover" />
            <InfoSection {...homeObjThree} id="signup" />
            <ServicesSection />
        </>
    )
}

export default Home
