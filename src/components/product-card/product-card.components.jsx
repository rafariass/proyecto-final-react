import './product-card.components.scss';
import { Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../services/Market.context';

export default function ProductCard({ product }) {
  const { shopping, setShopping } = useContext(Context);
  const navigate = useNavigate();

  const { desc, id, img, name, price } = product;

  const capitalize = ([initial, ...rest]) => initial.toUpperCase() + rest.join('');
  const formatter = new Intl.NumberFormat('es-CL', { minimumFractionDigits: 0 });

  const toBuy = (id, img, name, price) => {
    if (shopping.findIndex((item) => item.id === id) === -1) {
      return setShopping([...shopping, { id, img, name, price, cant: 1 }]);
    }

    const newShopping = shopping.map((item) => {
      if (item.id === id) {
        item.cant += 1;
      }
      return item;
    });
    setShopping([...newShopping]);
  };

  return (
    <Card>
      {/* <Card.Img variant='top' src={img} /> */}
      <div className='product-img' style={{ backgroundImage: `url(${img})` }}></div>
      <Card.Header className='h4 py-2'>
        <h2 className='m-0'>{capitalize(name)}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text className='text-justify desc'>{desc}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted py-3'>
        <h2 className='text-center pt-2 pb-3'>$ {formatter.format(price)}</h2>
        <div className='card-btns'>
          <Button variant='dark' onClick={() => navigate('/pizza/' + id)}>
            Ver Más
            <img
              alt=''
              src={process.env.PUBLIC_URL + '/assets/img/search.png'}
              width='24'
              height='24'
              className='d-inline-block align-top ms-2'
            />
          </Button>
          <Button variant='danger' onClick={() => toBuy(id, img, name, price)}>
            Añadir
            <img
              alt=''
              src={process.env.PUBLIC_URL + '/assets/img/trolley.png'}
              width='24'
              height='24'
              className='d-inline-block align-top ms-2'
            />
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
}
