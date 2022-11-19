import { useAuth0 } from '@auth0/auth0-react';
import GalleryCards from '../components/gallery-cards/gallery-cards.components';

export default function Store() {
  const { isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return logout({ returnTo: window.location.origin });
  }

  return (
    <>
      <div className='container py-5'>
        <h2 className='display-2 fw-semibold lh-lg text-center'>Store</h2>
        <div className='store-section'></div>
      </div>
      <div className='container text-center'>
        <div className='py-2'>
          <h2 className='display-3 fw-semibold lh-lg text-center'>Products</h2>
          <p className='lead lh-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut exercitationem ratione, ipsam facilis expedita
            delectus aliquam sapiente veritatis commodi culpa quae explicabo cupiditate recusandae dolor labore ipsa
            consectetur, odio sed.
          </p>
        </div>
        <GalleryCards />
      </div>
    </>
  );
}
