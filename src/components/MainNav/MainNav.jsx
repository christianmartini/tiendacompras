import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function MainNav (){
return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home"><img src="logo.png" alt="logo" width="150" height="110"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Electronica</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Automotores</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Supermercado</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Servicios</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#ShoppingKart">
            <CartWidget />
        </Navbar.Brand>
    </Container>
    </Navbar>
)
}
export default MainNav
