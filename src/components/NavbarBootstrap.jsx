import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../components/CartWidget'
import { NavLink } from 'react-router-dom';

function NavbarBootstrap() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
        <Navbar.Brand as={NavLink} to='/'>
          <img src="./public/librarium (3).png" alt="" className="logo"/>
        </Navbar.Brand>   

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/nosotros' className='nav-item'>Nosotros</Nav.Link>
            <NavDropdown title="Libros" id="collapsible-nav-dropdown" className='nav-item'>
              <NavDropdown.Item as={NavLink} to='/category/mas vendidos'>
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/nuevos'>
                Nuevos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/usados'>
                Usados
              </NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link as={NavLink} to='/ebooks/' className='nav-item'>eBooks</Nav.Link>
          </Nav>
          <Nav className='cart-container'>
            <Nav.Link as={NavLink} to='/'>
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarBootstrap;