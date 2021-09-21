import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import Logo from '../../assets/imagenes/logo.png'

function MainNav (){
return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand><Link to="/"><img src= {Logo} alt="logo" width="150" height="110"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link><Link to="/categoria/oferta">Ofertas</Link></Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/categoria/telefono">Telefonos</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/categoria/auto">Autos</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/categoria/super">Supermercado</Link></NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Servicios</NavDropdown.Item> */}
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
