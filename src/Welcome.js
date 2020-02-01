import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Welcome() {

    return (
        <div id="home">
            <Navbar bg="transparent" expand="lg" fixed="top">
                <Navbar.Brand href="#home">
                    <img src={'./assets/img/icon/logo-128.png'} alt="icon" className="img-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="welcome">
                <header id="welcome-header">Hello, There.</header>
                <span id="subheader">I'm Kevin, a Front End Developer</span>
                <a href='#about' id="scrolldown">
                    <lottie-player src={"./assets/img/animation/1405-scroll-down.json"} background="transparent" speed="1"
                        style={{width:'300px', height: '250px'}} loop autoplay>
                    </lottie-player>
                </a>
            </div>
        </div>
    )
}