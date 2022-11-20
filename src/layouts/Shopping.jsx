import { Button, Container } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import Context from '../services/Market.context';
import { useAuth0 } from '@auth0/auth0-react';

export default function Shopping() {
  const { isAuthenticated, logout } = useAuth0();
  const { shopping, setShopping } = useContext(Context);
  const [total, setTotal] = useState(0);

  const formatter = new Intl.NumberFormat('es-CL', { minimumFractionDigits: 0 });
  const capitalize = ([initial, ...rest]) => initial.toUpperCase() + rest.join('');

  useEffect(() => {
    setTotal(shopping.reduce((a, b) => a + b.cant * b.price, 0));
  }, [shopping]);

  const addProduct = (id) => {
    const newCarrito = shopping.map((item) => {
      if (item.id === id) {
        item.cant += 1;
      }
      return item;
    });
    setShopping(newCarrito);
  };

  const removeProduct = (id) => {
    const newCarrito = [];
    shopping.forEach((item) => {
      if (item.id === id) item.cant -= 1;
      item.cant >= 1 && newCarrito.push(item);
    });
    setShopping(newCarrito);
  };

  if (!isAuthenticated) {
    return logout({ returnTo: window.location.origin });
  }

  return (
    <Container fluid className='dashboard'>
      <Container className='py-5'>
        <div className='bg-light p-3 border rounded'>
          <h5 className='m-0 py-2'>Detalle del pedido:</h5>
          <Container className='bg-white'>
            <div className=''>
              <ul className='list-group list-group-flush border-bottom'>
                {/* <li class='list-group-item'>An item</li> */}
                {shopping.map((item) => {
                  return (
                    <li className='list-group-item product-item' key={item.id}>
                      <div className='d-flex align-items-center'>
                        <img
                          src={item.img}
                          alt='Product Selected'
                          width='64'
                          height='64'
                          className='d-inline-block align-top me-2'
                        />
                        <p className='m-0'>{capitalize(item.name)}</p>
                      </div>
                      <div className='d-flex product-item-btns gap-2'>
                        <p className='m-0'>$ {formatter.format(item.price * item.cant)}</p>
                        <Button
                          variant='danger'
                          className='px-3'
                          onClick={() => {
                            removeProduct(item.id);
                          }}>
                          -
                        </Button>
                        <p className='m-0'>{item.cant}</p>
                        <Button
                          variant='primary'
                          className='px-3'
                          onClick={() => {
                            addProduct(item.id);
                          }}>
                          +
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='product-total p-2'>
              <h3 className='m-0'>Total: $ {formatter.format(total)}</h3>
              <Button
                variant='success'
                onClick={() => {
                  alert(
                    total ? 'Gracias por preferirnos!' : 'Primero debe agregar productos a su carro.'
                  );
                }}
                className='px-4'>
                Ir a Pagar
              </Button>
            </div>
          </Container>
        </div>
      </Container>
    </Container>
  );
}
