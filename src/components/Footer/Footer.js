// 푸터임
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container, Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="/admin">3조</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin">2차 프로젝트</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin">화이팅...</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{' '}
          <i className="tim-icons icon-heart-2" /> by{' '}
          <a href="/" target="_blank">
            3조
          </a>{' '}
          입니다
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
