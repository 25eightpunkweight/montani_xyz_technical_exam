import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  
import xyzLogo from "../assets/xyz_assets/Assets/sample logo.svg"
import SearchBarForm from './subcomponents/SearchBarForm.component';
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Row } from 'react-bootstrap';

// import Styled from './.styled'

function Navigation() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={xyzLogo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Rent Textbooks</Nav.Link>
            <Nav.Link href="#link">Buy Textbooks</Nav.Link>
            <Nav.Link href="#link">Sell Textbooks</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse style={{flexDirection: 'column'}}>
          <SearchBarForm/>
        </Navbar.Collapse>
        <Navbar.Collapse style={{justifyContent: 'space-around'}}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              EN
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SP</Dropdown.Item>
              <Dropdown.Item href="#/action-3">RU</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button>Contact Us</Button>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;