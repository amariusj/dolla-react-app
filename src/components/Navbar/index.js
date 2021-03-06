import React, { useState, useEffect } from 'react'

//import styled components
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

//import icons
import { FaBars } from 'react-icons/fa'

//used to change the color of all icons
import { IconContext } from 'react-icons/lib'

//Used to add smooth scroll
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav} >
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome} >dolla</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="signup"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
