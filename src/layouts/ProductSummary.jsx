import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../services/Market.context';

export default function ProductSummary() {
  const { isAuthenticated, logout } = useAuth0();
  const { id } = useParams();
  const { products } = useContext(Context);
  const [productSelected, setProductSelected] = useState({});

  const formatter = new Intl.NumberFormat('es-CL', { minimumFractionDigits: 0 });
  const capitalize = ([initial, ...rest]) => initial.toUpperCase() + rest.join('');

  useEffect(() => {
    const data = products?.find((p) => p?.id === id);
    setProductSelected(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!isAuthenticated) {
    return logout({ returnTo: window.location.origin });
  }

  return (
    <>
      <div className='container dashboard p-3'>
        <h1 className='display-3'>{productSelected?.name && capitalize(productSelected?.name)}</h1>
        <p className='lead text-center'>{productSelected?.desc}</p>
        <img src={productSelected?.img} alt={productSelected?.name} className='img-sumary' />
        <h2 className='m-2'>Precio: $ {formatter.format(productSelected?.price)}</h2>
        <p className='lead text-center'>Vendedor: {productSelected?.owner}</p>
      </div>
    </>
  );
}
