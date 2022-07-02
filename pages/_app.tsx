import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "50px" }}>
        <Container>
          <Navbar.Brand href="#home">MAS PROJEKT S19049</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
