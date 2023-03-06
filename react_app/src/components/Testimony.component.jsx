import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import testimonialIcon from '../assets/xyz_assets/Assets/user.png';
import binanceLogo from "../assets/xyz_assets/Assets/logo-binance.svg";
import stars from "../assets/xyz_assets/Assets/star.svg";


import Styled from './stylesheet.styled';

function BoilerPlate() {
  return (
    <Container>
        <Styled.SectionRow text_align="center" style={{...Styled.rowSectionSubStyle, ...{paddingTop: '80px'}}}  >
            <h4>Andrew Santellan</h4>
            <p>Product Manageer, Binance</p>
            <Col md={{span:4, offset: 4}}>
                <img src={binanceLogo} />
                Binance
            </Col>
            <Col md={{span: 10, offset: 1}}>
                <Card>
                    <Styled.TestimonialCardImg variant="top" src={testimonialIcon}/>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporinvidunt ut labore et dolore Stet clita kasd gubergren, no sea takimata.
                    </Card.Text>
                    <Card.Footer>
                        <img src={stars} />
                    </Card.Footer>
                </Card>
            </Col>
            
        </Styled.SectionRow>
    </Container>
  );
}

export default BoilerPlate;