import React from "react";
import { Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { styles } from "../styles/styles";

const Layout = ({ children }) => {
  return (
    <div style={styles.app}>
      <Nav fill variant='tabs' defaultActiveKey='/'>
        <Nav.Item>
          <Nav.Link as={Link} to='/' eventKey='link-0'>
            Kontrol Kipas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/monitor' eventKey='link-1'>
            Monitoring Kipas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to='/otomatis' eventKey='link-2'>
            Mode Otomatis
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container style={styles.container}>{children}</Container>
    </div>
  );
};

export default Layout;
