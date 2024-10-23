import "./Navb.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navb() {
  return (
    <Navbar expand="lg" id="navb">
      <Container>
        <Navbar.Brand href="#home" className="title">Gestor Económico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/' className="text">Inicio</Nav.Link>
            <Nav.Link href="/registrogastos" className="text">Gastos</Nav.Link>
            <Nav.Link href="/registroingresos" className="text">Ingresos</Nav.Link>
            <Nav.Link href="/categoria" className="text">Categoria</Nav.Link>
            <Nav.Link href="/metodopagos" className="text">Pagos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}