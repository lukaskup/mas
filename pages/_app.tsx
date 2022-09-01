import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MAS PROJEKT S19049</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
