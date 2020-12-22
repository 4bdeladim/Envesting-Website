import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

export const NavbarContainer = styled.div ` 
    display: flex ;
    flex-direction: row ;
    justify-content: flex-end;
    align-items: center ;
    flex-wrap: wrap ;
    width: 97.05vw ; 
    height: 50px ;
    z-index: 999 ;
    transition: all 0.3s ease ;
    background: ${({open}) => open ? '#33404f' : 'unset'} ;
    padding-top: 1rem ;
    


    @media screen and (min-width: 660px) {
       background: unset ;
    }

`

export const NavbarTitleContainer = styled.div` 
    display: flex ;
    flex-direction: row ;
    align-items: flex-end ;
    justify-content: flex-start ;

`

export const NavbarTitle = styled.h3` 
    font-family: 'Montserrat', sans-serif ;
    font-weight: 600 ;
    margin-top: -.12rem ; 
    transition: all 0.3s ease ;
    color: ${({open}) => open ? '#ffff' : '#33404f'} ;
    position: absolute ;
    top: 1.5rem ;
    left: 4rem ;
    @media screen and (max-width: 657px) {
        top: 1rem ;
        left: 1rem ;
    }
    @media screen and (min-width: 660px) {
       color: #33404f ;
    }
`
export const Icon = styled.div ` 
    position: absolute ;
    top: .9rem ;
    right: 1rem ;
    color: #b6c6c4 ;

    @media screen and (min-width: 660px) {
        display: none ;
    }

`
export const NavbarWrapper = styled.div  ` 
    display: flex ;
    flex-flow: row nowrap ;
    justify-content: space-around ;
    align-items: center ;
    margin-right: 4rem ;
    @media screen and (max-width: 657px) {
        display: none ;
    }
   
`

export const NavbarItem = styled(Link) ` 
    font-family: 'Montserrat', sans-serif ;
    padding: 0 1rem ;
    color: #b6c6c4 ;
    cursor: pointer ;
`

export const Button = styled.button ` 
    outline: none ;
    border: none ;
    padding: .5rem 1rem ;
    margin-left: 2rem ; 
    margin-top: .09rem ; 
    background: #33404f ;
    color: #fff ;
    font-family: 'Montserrat', sans-serif ;
    font-weight: 500 ;
    border-radius: 10px ;
    text-transform: uppercase ;
`
export const Bars = styled(FaBars) ` 
    color: ${({open}) => open ? '#ffff' : '#33404f'} ;
    font-size: 1.5rem ;
    cursor: pointer ;
`
export const Times = styled(FaTimes) ` 
    color: ${({open}) => open ? '#ffff' : '#33404f'} ;
    font-size: 1.5rem ;
    cursor: pointer;
`
