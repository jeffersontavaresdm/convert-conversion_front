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
            ? < button onClick={ handleClick } className="back-button" >&laquo; Voltar</button >
            : <div ></div >
        }
        <Nav >
          <Nav.Link className={ "navlink" } href="/" disabled={ location.pathname === "/" } >
            Home
          </Nav.Link >
          <Nav.Link
            className={ "navlink" }
            href="/currency-conversion"
            disabled={ location.pathname === "/currency-conversion" } >
            Conversor
          </Nav.Link >
          <Nav.Link className={ "navlink" } href="/all" disabled={ location.pathname === "/all" } >
            Conversões
          </Nav.Link >
          <Nav.Link className={ "navlink" } href="/dot" disabled={ location.pathname === "/dot" } >
            Pontos
          </Nav.Link >
        </Nav >
      </Container >
    </Navbar >
  );
}

export default AppNavbar;