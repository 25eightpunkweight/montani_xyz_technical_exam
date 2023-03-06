import React from 'react'
import { Col, Container, Form, Row, InputGroup, ListGroup } from 'react-bootstrap';
import xyzLogo from "../assets/xyz_assets/Assets/sample logo.svg"

import Styled from './stylesheet.styled'

function BoilerPlate() {
  const socials = ['facebook', 'linkedin', 'twitter'];

  return (
    <Styled.FooterContainer>
        <Styled.SectionRow align="left" style={Styled.rowSectionSubStyle}>
            {/* logo and email address box */}
            <Col md={2}> 
              <img src={xyzLogo}></img>
              <p><small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</small></p>
              <Form>
                <Form.Group className="mb-3">
                  <InputGroup>
                    <Form.Control 
                      type="text" 
                      placeholder="Email Address"
                    />
                    <InputGroup.Text>&#8250;</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Form>
            </Col>
            {/* Menu list Dropdown*/}
            <Col md={2}>
              <ListGroup>
                <ListGroup.Item><h5>Menu</h5></ListGroup.Item>
                <ListGroup.Item>Shop All</ListGroup.Item>
                <ListGroup.Item>About Us</ListGroup.Item>
                <ListGroup.Item>Community</ListGroup.Item>
                <ListGroup.Item>FAQs</ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Support list Dropdown*/}
            <Col md={2}>
              <ListGroup>
                <ListGroup.Item><h5>Support</h5></ListGroup.Item>
                <ListGroup.Item>Shipping & Returns</ListGroup.Item>
                <ListGroup.Item>Help & FAQ</ListGroup.Item>
                <ListGroup.Item>Terms and Conditions</ListGroup.Item>
                <ListGroup.Item>Contact</ListGroup.Item>
                <ListGroup.Item>Login</ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Resources list Dropdown */}
            <Col md={2}>
              <ListGroup>
                <ListGroup.Item><h5>Resources</h5></ListGroup.Item>
                <ListGroup.Item>Shipping & Returns</ListGroup.Item>
                <ListGroup.Item>Help & FAQ</ListGroup.Item>
                <ListGroup.Item>Terms and Conditions</ListGroup.Item>
                <ListGroup.Item>Contact</ListGroup.Item>
                <ListGroup.Item>Login</ListGroup.Item>
              </ListGroup>
            </Col>
            {/* Chat Button */}
            <Col md={{span: 1, offset: 3}} style={{position: 'relative'}}>
              <Styled.ChatButton/>
            </Col>
        </Styled.SectionRow>
        <Row style={Styled.rowSectionSubStyle}>
            <Col md={2}>
              © 2022 Brainly.
            </Col>
            <Col md={7}></Col>
            <Col md={3}>
              <Styled.SocialsLinksContainer>
                {
                  socials.map((e, i)=>{
                    return (
                      <Styled.SocialsLink link={e} key={i}/>
                    )
                  })
                }
              </Styled.SocialsLinksContainer>
            </Col>
        </Row>
    </Styled.FooterContainer>
  );
}

export default BoilerPlate;