import React from 'react'

import {  NavbarContainer, NavbarWrapper, NavbarItem, Button } from './style'

const Sidebar = ({open, close}) => {
    return (
        <NavbarContainer open={open}>
            <NavbarWrapper>
                <NavbarItem onClick={close} to='pricing'>
                    Pricing
                </NavbarItem>
                <NavbarItem to='aboutus' onClick={close} >
                    About US 
                </NavbarItem>
                <NavbarItem to='tisimonsials' onClick={close} >
                    Tistimonials
                </NavbarItem>
                <Button  onClick={close} >
                    Try for free
                </Button>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Sidebar
