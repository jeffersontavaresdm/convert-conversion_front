import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Button from "react-bootstrap/Button";

function AppNavbar() {
  const location = useLocation();

  if (location.pathname === '/') return null

  const handleClick = () => {
    window.history.back();
  }

  return (
    <Navbar bg="dark" expand="sm" id="app-navbar" >
      <Container >
        {
          location.pathname !== '/'
            ? <Button variant={ "outline-info" } onClick={ handleClick } >&laquo; Previous</Button >
            : <div ></div >
        }
        <Nav >
          <Nav.Link className={ "navlink" } href="/" >Home</Nav.Link >
          <Nav.Link className={ "navlink" } href="/contacts" >Me</Nav.Link >
          <Nav.Link className={ "navlink" } href="/all" >BRL's</Nav.Link >
          <Nav.Link className={ "navlink" } id="navbar-back" href="/back" hidden={ true } >Back</Nav.Link >
        </Nav >
      </Container >
    </Navbar >
  );
}

export default AppNavbar;