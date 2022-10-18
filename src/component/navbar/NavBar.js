import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {StrictMode} from 'react';

// import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";


function Menu() {
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#"><i class = "fa-bars"></i></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#addsong">Addsong</Nav.Link>
            <Nav.Link href="#songdetails">Songdetails</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}
export default Menu;