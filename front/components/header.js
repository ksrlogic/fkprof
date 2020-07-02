import React from "react";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./AppLayout.module.css";

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(0);

  const setLog1 = () => {
    setIsLoggedIn(1);
  };

  const setLog0 = () => {
    setIsLoggedIn(0);
  };
  return (
    <Navbar
      className={styles.navigation}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">교수님 욕하기방</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">내 프로필</Nav.Link>
          <Nav.Link href="#pricing">게시글</Nav.Link>
        </Nav>
        <Nav>
          {isLoggedin === 0 ? (
            <>
              <Nav>
                <Nav.Link href="#deets">Register</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" onClick={setLog1}>
                  Login
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <Nav.Link onClick={setLog0} href="#deets">
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
