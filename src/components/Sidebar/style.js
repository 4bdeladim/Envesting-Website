import styled from 'styled-components'
import { Link } from 'react-scroll'


export const NavbarContainer = styled.div ` 
    display: flex ;
    flex-direction: row ;
    justify-content: space-around ;
    align-items: flex-start ;
    flex-wrap: wrap ;
    width: 100vw ; 
    height: calc(100vh - 50px) ;
    position: fixed ;
    z-index: 999 ;
    background: #33404f ;
    padding-top: 7rem ;
    transition: all 0.5s ease ;
    transform: ${({open}) => open ? 'translateX(0%)' : 'translateX(-100%)'}  ;

    @media screen and (min-width: 660px) {
        display: none ;
    }
`



export const NavbarWrapper = styled.div  ` 
    display: flex ;
    flex-direction: column ;
    align-items: center ;
   
`

export const NavbarItem = styled(Link) ` 
    font-family: 'Montserrat', sans-serif ;
    padding: 1rem 0 ;
    color: #ffffff ;
    cursor: pointer ;
    font-size: 2rem ;
`

export const Button = styled.button ` 
    outline: none ;
    border: none ;
    padding: .5rem 1rem ;
    margin-top: 2rem ;
    background: #fff ;
    color: #33404f ;
    font-family: 'Montserrat', sans-serif ;
    font-weight: 500 ;
    border-radius: 10px ;
    text-transform: uppercase ;
    cursor: pointer ;
    font-size: 1.5rem ;
`