import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" expand="sm">
      <Container style={{
        marginLeft: "100px",
      }}>
        <Nav
          className="me-auto"
          style={{fontSize: "24px", fontWeight: "bold"}}>
          <Nav.Link className={"navlink"} href="/">Home</Nav.Link>
          <Nav.Link className={"navlink"} href="/all">All</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;