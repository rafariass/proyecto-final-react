import { useAuth0 } from '@auth0/auth0-react';

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
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </>
      ) : (
        logout({ returnTo: window.location.origin })
      )}
    </div>
  );
}
