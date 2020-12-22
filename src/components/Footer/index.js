import React from 'react'
import { FooterContainer, Links, Link,  Row, RowTitle, Instagram, Email, Github } from './style'



const Footer = () => {
    return (
        <FooterContainer>
            <Row>
                <RowTitle>Services</RowTitle>
                <Links>
                    Products
                </Links>
                <Links>
                    Communications
                </Links>
                <Links>
                    Help
                </Links>
                <Links>
                    SignUp
                </Links>
            </Row>
            <Row>
                <RowTitle>Products</RowTitle>
                <Links>
                    Mobile Apps
                </Links>
                <Links>
                    Community
                </Links>
                <Links>
                    Pricing
                </Links>
                <Links>
                    Carrers
                </Links>
            </Row>
            <Row>
                <RowTitle>Site Map</RowTitle>
                <Links>
                    Services
                </Links>
                <Links>
                    About Us
                </Links>
                <Links>
                    Demo
                </Links>
                <Links>
                    Pricing
                </Links>
                <Links>
                    Try For Free
                </Links>
            </Row>
            <Row>
                <RowTitle>Get Weekly Updates</RowTitle>
                <Link>
                    Subscribe to get the best offers.
                </Link>
                <Link>
                    We promise to not spam
                </Link>
                <Link>
                    <Instagram />
                    <Github />
                    <Email />
                </Link>
                
            </Row>
        </FooterContainer>
    )
}

export default Footer
