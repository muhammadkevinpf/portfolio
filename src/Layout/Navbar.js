import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/img/icon/logo-128.png";
export default function Navigation() {
  let [pos, setPos] = useState(0);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temp = document.body.getBoundingClientRect().top;
      setPos(temp);
      setVisible(document.body.getBoundingClientRect().top > pos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Navbar
      bg="default"
      expand="lg"
      fixed="top"
      className={visible ? "" : "nav-hidden"}
    >
      <Navbar.Brand href="#home">
        <img src={Logo} alt="icon" className="img-logo" />
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
  );
}
