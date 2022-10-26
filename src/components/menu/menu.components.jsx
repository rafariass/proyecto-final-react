import './menu.components.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function Menu() {
  const setActiveClass = ({ isActive }) => (isActive ? 'menu-link active' : 'menu-link');

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='sticky-top'>
      <Container>
        <NavLink to='/' className={setActiveClass}>
          <Navbar.Brand>
            <img
              alt='Logo Pizza'
              src={process.env.PUBLIC_URL + '/logo32.png'}
              width='30'
              height='30'
              className='d-inline-block align-top me-2'
            />
            Pizzería Mamma Mía!
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink to='/carrito' className={setActiveClass}>
              <img
                alt='Carrito de compra'
                src={process.env.PUBLIC_URL + '/trolley.png'}
                width='30'
                height='30'
                className='d-inline-block align-top me-2'
              />
              $ --
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  );
}
