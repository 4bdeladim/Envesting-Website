import styled from 'styled-components'
import { FiGithub, FiInstagram } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'


export const FooterContainer = styled.footer ` 
    display: flex ;
    flex-direction: row ;
    justify-content: center ;
    align-items: flex-start ;
    flex-wrap: wrap ;
    width: 100% ;
    margin-top: 8rem ;
    background: #33404f ;
    padding-bottom: 2rem ;
`

export const Row = styled.ul ` 
    list-style: none ;
    padding: 0 2rem ;
    padding-top: 3rem ;
`
export const RowTitle  = styled.h3 ` 
    color: #FFF ;
    font-weight: 600 ; 
    padding: .5rem ;
    padding-bottom: .5rem ;
`
export const Links = styled.li ` 
    color: #fff ;
    padding: .5rem ;
`

export const Link = styled.li ` 
    color: #fff ;
    margin-left: .5rem ;
`

export const Instagram = styled(FiInstagram) ` 
    font-size: 2rem ;
    margin: 1rem 1rem 1rem 0 ;
`

export const Github = styled(FiGithub) ` 
    font-size: 2rem ;
    margin: 1rem 1rem 1rem 0 ;
`

export const Email = styled(AiOutlineMail) ` 
    font-size: 2rem ;
    margin: 1rem 1rem 1rem 0 ;
`