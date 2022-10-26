import './menu.components.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function Menu() {
  const setActiveClass = ({ isActive }) => (isActive ? 'menu-link active' : 'menu-link');

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' className='sticky-top'>
        <Container>
          <NavLink to='/' className={setActiveClass}>
            <Navbar.Brand>
              <img
                alt='Logo Marketplace'
                src={process.env.PUBLIC_URL + '/assets/icon/logo32.png'}
                width='30'
                height='30'
                className='d-inline-block align-top me-2'
              />
              Marketplace
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink end to='/' className={setActiveClass}>
                Home
              </NavLink>
              <NavLink to='/store' className={setActiveClass}>
                Store
              </NavLink>
              <NavLink to='/contact' className={setActiveClass}>
                Contact
              </NavLink>
              <NavLink to='/login' className={setActiveClass}>
                Log In
              </NavLink>
              <NavLink to='/signup' className={setActiveClass}>
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
