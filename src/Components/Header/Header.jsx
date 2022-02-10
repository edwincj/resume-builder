import { FaGithub } from "react-icons/fa";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  // <div className="header">
  //   <span>Resumé Builder</span>
  //   <span>
  //     <FaGithub />
  //   </span>
  // </div>
  <Navbar bg="light" variant="light" className="header">
    <Container>
      <Navbar.Brand>Resumé Builder</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <FaGithub />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
