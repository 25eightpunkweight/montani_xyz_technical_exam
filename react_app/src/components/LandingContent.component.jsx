import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';
import landpageimg from "../assets/xyz_assets/Assets/hero_illustration.svg"
import landpageimg2 from "../assets/xyz_assets/Assets/Group13597.png"
import binanceLogo from "../assets/xyz_assets/Assets/logo-binance.svg"
import Styled from './stylesheet.styled'

function LandingContent() {
  const landpageimg2Style = {
    height: 'auto',
    width: '100%'
  }
                    
  const clients = ['Binance', 'Bitcoin', 'Solana', 'Ethereum', 'Tether', 'XRP'];

  return (
    <Styled.LandingContainer>
      {/* <Styled.LandingContainer> */}
      <Styled.SectionRow text_align="left" style={Styled.rowSectionSubStyle}>
        <Col style={Styled.columnCenteredText} md={{span: '3', offset: '2'}}>
          <h1>The Cheapest Textbooks</h1>
          <h3>Save Up To 90% On Millions Of Titles</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
          <Button>Get Started <ChevronRight/></Button>
        </Col>
        <Col md={6}>
          <img src={landpageimg}></img>
        </Col>
      </Styled.SectionRow>
      <Styled.SectionRow text_align="left" style={Styled.rowSectionSubStyle}>
        <Col md={{span: '4', offset: '2'}}>
          <img style={landpageimg2Style} src={landpageimg2}></img>
        </Col>
        <Col style={Styled.columnCenteredText} md={{span: '3'}}>
          <h3>Our Commitment</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
          <Button>Learn More <ChevronRight/></Button>
        </Col>
      </Styled.SectionRow>
      <Styled.SectionRow text_align="center" style={Styled.rowSectionSubStyle}>
        <Styled.LandingSubContainer>
          <Row>
            <h1>Trusted By Our Awesome Clients</h1>
          </Row>
          <Row>
            {
              clients.map((e, i)=>{
                return(
                  <Col md={2} key={i}>
                    <img style={{height: '100%', marginRight: '10px'}} alt="" src={require('../assets/xyz_assets/Assets/logo-' + e.toLowerCase() + '.svg')}></img>
                    <a style={{fontSize: '20px', fontWeight: 'bold'}}>{e}</a>
                  </Col>
                )
              })
            }
            
          </Row>
        </Styled.LandingSubContainer>
        
      </Styled.SectionRow>
      {/* </Styled.LandingContainer> */}

    </Styled.LandingContainer>
  );
}

export default LandingContent;