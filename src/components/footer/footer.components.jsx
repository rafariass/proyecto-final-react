import './footer.components.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    /*     <NavLink to='/' className='menu-link'>
      <div className='w-100 p-3 m-0 bg-dark text-white text-center d-flex justify-content-center align-items-center'>
        <img
          alt='Logo Marketplace'
          src={process.env.PUBLIC_URL + '/assets/icon/logo32.png'}
          width='30'
          height='30'
          className='d-inline-block align-top me-2'
        />
        Marketplace
      </div>
    </NavLink> */

    <div className='w-100 m-0 bg-dark footer'>
      <NavLink to='/' className='d-flex justify-content-center align-items-center menu-link-2'>
        <img
          alt='Logo Marketplace'
          src={process.env.PUBLIC_URL + '/assets/icon/logo32.png'}
          width='30'
          height='30'
          className='d-inline-block align-top me-2'
        />
        Marketplace
      </NavLink>
    </div>
  );
}
