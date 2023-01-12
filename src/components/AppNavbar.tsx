import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useLocation} from "react-router-dom";

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
            ? < button onClick={ handleClick } className="back-button" >&laquo; Back</button >
            : <div ></div >
        }
        <Nav >
          <Nav.Link className={ "navlink" } href="/" >Home</Nav.Link >
          <Nav.Link className={ "navlink" } href="/currency-conversion" >Currency Conversion</Nav.Link >
          <Nav.Link className={ "navlink" } href="/dot" >Dot</Nav.Link >
        </Nav >
      </Container >
    </Navbar >
  );
}

export default AppNavbar;