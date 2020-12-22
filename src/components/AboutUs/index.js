import React from 'react'
import { AboutContainer, AboutTitle, Card, Icon, Title, Descreption, CardsContainer } from './style'
import { trusted, security, support} from '../../data/cards'
import Pig from '../../assets/Pig.svg'
import Credit from '../../assets/Credit.svg'
import Support from '../../assets/Support.svg'


const About = () => {
    return (
        <AboutContainer id="aboutus">
            <AboutTitle>
                why us ?
            </AboutTitle>
            <CardsContainer>
            <Card>
                <Icon src={Pig}>

                </Icon>
                <Title>
                    {trusted.title}
                </Title>
                <Descreption>
                    {trusted.descreption}
                </Descreption>
            </Card>

            <Card>
                <Icon src={Credit}>

                </Icon>
                <Title>
                    {security.title}
                </Title>
                <Descreption>
                    {security.descreption}
                </Descreption>
            </Card>

            <Card>
                <Icon src={Support}>

                </Icon>
                <Title>
                    {support.title}
                </Title>
                <Descreption>
                    {support.descreption}
                </Descreption>
            </Card>
            </CardsContainer>
            

        </AboutContainer>
    )
}

export default About
