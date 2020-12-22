import styled from 'styled-components'
import { MdEmail } from 'react-icons/md'

export const HeroContainer = styled.div ` 
    display: flex ;
    flex-direction: ${({row}) => row ? 'row-reverse' : 'row'} ;
    flex-wrap: wrap-reverse ;
    justify-content: center ;
    align-items: center ;
    margin-top: 8rem ; 
`

export const Content = styled.div ` 
    padding: 0 4rem ; 
    display: flex ;
    flex-direction: column ;
    justify-content : center ;
    margin-top: -4rem ;


    @media screen and (max-width: 1370px) {
        padding: 4rem 0  ; 
        margin-top: 0rem ;
    }

`
export const ImgContainer = styled.div ` 
    display: flex ;
    flex-direction: column ;
    justify-content : center ;
    padding: 0 4rem ; 
    

    @media screen and (max-width: 1370px) {
        padding: 0  ; 
        margin-top: -5rem ;
    }
    
`

export const SmallTitle = styled.h2 ` 
    font-size: 1rem ;
`

export const Title = styled.h1 ` 
    width: 500px ;
    font-size: 3rem ; 
    padding: 1rem 0 ;

    @media screen and (max-width: 500px) {
        width: 80vw ;
    }
   
`

export const Descreption = styled.p ` 
    width: 500px ;
    color: #a9afb5 ;
    opacity: 1.5 ; 

    @media screen and (max-width: 500px) {
        width: 80vw ;
    }
`


export const IconsContainer = styled.div ` 
    width: 500px ;
    padding: 2rem 0 ;
    display: flex ;

    @media screen and (max-width: 500px) {
        width: 80vw ;
    }
`

export const IconInfo = styled.div ` 
    width: 50% ;
    display: flex ;
    align-items: center ;
    position: relative ;
    

`
export const Icon = styled.img ` 
    width: 50px ;
    height: 50px ;
`

export const IconTitle = styled.h2 ` 
    font-weight: 600 ; 
    font-size: 15px ; 
    text-transform: uppercase ;
    padding: 0 .2rem ;

    &::before{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background: #00dda3;
        top: 0;
        left: 0;
        z-index: -1;
    }

`

export const IconTitle2 = styled.h2 ` 
    font-weight: 600 ; 
    font-size: 15px ; 
    text-transform: uppercase ;
    padding: 0 .2rem ;

    &::before{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background: #00dda3;
        top: 0;
        left: 0;
        z-index: -1;
    }
`

export const InputContainer = styled.div ` 
    position: relative ;
    display: ${({input}) => input ? '' : 'none'} ;
`

export const Input = styled.input ` 

    padding: .5rem 3rem ;
    border-radius: 20px ;
    border: 2px #a9afb5 solid  ;
    outline: none ;
    border-right: none ;

    &::placeholder {
        font-family: 'Montserrat', sans-serif ;
    }
`

export const Button = styled.button ` 
    padding: .55rem 2rem ;
    border: none ;
    border-radius: 20px ;
    outline: none ;
    position: absolute ;
    top: 0 ;
    right: 25% ;
    background: #33404f ;
    font-weight: 600 ;
    color: #fff ;
    letter-spacing: 1px ; 
    font-family: 'Montserrat', sans-serif ;
    cursor: pointer;
    text-transform: uppercase ;
`

export const Image = styled.img ` 
    width: 600px ;

    @media screen and (max-width: 640px) {
        width: 80vw ;
    }
`

export const InputIcon = styled(MdEmail) ` 
    position: absolute ;
    left: 1rem  ;
    top: 5px ;
    fill: #a9afb5 ;
    font-size: 1.5rem ;
    z-index: 999 ;
`