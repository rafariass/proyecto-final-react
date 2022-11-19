import './hero-section.components.scss';
/* import { NavLink } from 'react-router-dom'; */

export default function HeroSection() {
  return (
    <div className='hero'>
      <h1 className='display-3'>Lorem, ipsum.</h1>
      <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut iusto repellat, voluptatum sapiente reiciendis eius!</p>
      {/* <NavLink to='/store'>
        <button className='btn btn-dark lead'>View Store</button>
      </NavLink> */}
    </div>
  );
}
