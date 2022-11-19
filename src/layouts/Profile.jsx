import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return (
      <div className='text-center dashboard'>
        <div className='lds-facebook'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className='text-center dashboard'>
      {isAuthenticated ? (
        <>
          <img src={user?.picture} alt={user?.name} className='rounded-circle' />
          <h2 className='h1'>{user?.name}</h2>
          <p className='lead'>{user?.email}</p>
          <NavLink to='/newproduct'>
            <button className='btn btn-dark lead'>New Product</button>
          </NavLink>
        </>
      ) : (
        logout({ returnTo: window.location.origin })
      )}
    </div>
  );
}
