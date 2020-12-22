import React from 'react'
import { NavbarContainer, NavbarWrapper, NavbarItem, NavbarTitleContainer, NavbarTitle, Button, Icon, Bars, Times } from './style'

const Navbar = ({navbarHandler, click, open, close }) => {

    


    return (
        <NavbarContainer open={open}>
            <NavbarTitleContainer>
                <NavbarTitle open={open}>
                    INVETO
                </NavbarTitle>
                <Icon>
                {click ? <Times open={open} onClick={navbarHandler} /> : <Bars open={open}  onClick={navbarHandler} />}
                </Icon>
                
            </NavbarTitleContainer>
            <NavbarWrapper>
                <NavbarItem onClick={close}  to='pricing' smooth={true} duration={800} spy={true}  exact='true' offset={-80} >
                    Pricing
                </NavbarItem>
                <NavbarItem to='aboutus' smooth={true} duration={800} spy={true}  exact='true' offset={-80}   onClick={close} >
                    About US 
                </NavbarItem>
                <NavbarItem to='tisimonsials' smooth={true} duration={800} spy={true}  exact='true' offset={-80}   onClick={close} >
                    Tistimonials
                </NavbarItem>
                <Button  onClick={close} >
                    Try for free
                </Button>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Navbar
