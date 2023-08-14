import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <div>
    <div className='top'>

      <Navbar>
        <Container className="container-fluid py-2">
        <NavLink className="navbar-brand mx-auto fw-bold" to="/"><img src="https://media.discordapp.net/attachments/1004356980669952011/1113058680867401848/image-removebg-preview.png" alt="" width="80px"/></NavLink>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about">Quem somos</NavLink>
            <NavLink className="nav-link" to="/products">Produtos</NavLink>
            <NavLink className="nav-link" to="/contact">Contato</NavLink>
          </Nav>
        </Container>
      </Navbar>
            </div>
                    
        </div>
                
        </>
    )
}

export default Header;