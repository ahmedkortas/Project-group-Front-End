// this the nav component that will be displayed on the left side of the page

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function NavCompLeftSide(props) {
  return (
    <>
      <Navbar bg="light" className="navLeft">
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
        <Container className="container">
          <Nav.Link href="#home">Home</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavCompLeftSide;
