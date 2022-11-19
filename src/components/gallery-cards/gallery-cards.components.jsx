import './gallery-cards.components.scss';
import { useContext } from 'react';
import Context from '../../services/Market.context';
import { Container } from 'react-bootstrap';
import ProductCard from '../product-card/product-card.components';

export default function GalleryCards() {
  const { products } = useContext(Context);

  return (
    <Container className='products-gallery my-5 py-3'>
      {products.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </Container>
  );
}
