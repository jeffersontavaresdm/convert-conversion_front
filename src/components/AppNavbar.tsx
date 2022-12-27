import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" expand="sm" id="app-navbar">
      <Container style={{
        marginLeft: "100px",
      }}>
        <Nav
          style={{fontSize: "24px", fontWeight: "bold"}}>
          <Nav.Link className={"navlink"} href="/">Home</Nav.Link>
          <Nav.Link className={"navlink"} href="/contacts">Me</Nav.Link>
          <Nav.Link className={"navlink"} href="/all">Conversions to BRL</Nav.Link>
          <Nav.Link className={"navlink"} id="navbar-back" href="/back" hidden={true}>Back</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;