import React from 'react'
import { Content, Button, Descreption, HeroContainer, Icon, IconInfo, IconsContainer, IconTitle, IconTitle2, Image, ImgContainer, Input, InputContainer, SmallTitle, Title, InputIcon } from './style'



const HeroSection = ({id, input, row, Heroimg, smallTitle, title, descreption, icon1, icon2, icon1Title, icon2Title}) => {
    return (
        <HeroContainer row={row} id={id}>
            <Content>
                <SmallTitle>{smallTitle}</SmallTitle>
                <Title>
                    {title}
                </Title>
                <Descreption>
                    {descreption}
                </Descreption>
                <IconsContainer>
                    <IconInfo>
                        <Icon src={icon1} />
                        <IconTitle>{icon1Title}</IconTitle>
                    </IconInfo>
                    <IconInfo>
                        <Icon src={icon2} />
                        <IconTitle2>{icon2Title}</IconTitle2>
                    </IconInfo>
                </IconsContainer>
                <InputContainer input = {input}>
                    <Input placeholder="Enter Email.. "/>
                    <InputIcon />
                    <Button>
                        Subscribe
                    </Button>
                </InputContainer>
            </Content>
            <ImgContainer>
                <Image src={Heroimg} />
            </ImgContainer>
        </HeroContainer>
    )
}

export default HeroSection
