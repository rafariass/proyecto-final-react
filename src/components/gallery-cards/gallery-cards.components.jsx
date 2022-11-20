import './gallery-cards.components.scss';
import { useContext, useEffect, useState } from 'react';
import Context from '../../services/Market.context';
import { Container } from 'react-bootstrap';
import ProductCard from '../product-card/product-card.components';
import { useDebounce } from 'usehooks-ts';

export default function GalleryCards() {
  const { products, favorite } = useContext(Context);
  const [name, setName] = useState('');
  const [productFilters, setProductFilters] = useState([]);
  const [order, setOrder] = useState('Lowest Price (Frst)');
  const debouncedValue = useDebounce(name, 1000);

  useEffect(() => {
    applyFilter(products);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, products, favorite]);

  useEffect(() => {
    if (name.trim()) {
      applyFilter(products.filter((p) => p?.name.toUpperCase().includes(name.toUpperCase().trim())));
    } else {
      applyFilter(products);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const applyFilter = (productsList) => {
    let productsClone = structuredClone(productsList);

    if (name.trim()) {
      productsClone = productsClone.filter((p) => p?.name.toUpperCase().includes(name.toUpperCase().trim()));
    }

    if (order === 'Lowest Price (Frst)') productsClone.sort((a, b) => a.price - b.price);
    else if (order === 'Highest Price (First)') productsClone.sort((a, b) => b.price - a.price);
    else if (order === 'A-Z') productsClone.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
    else if (order === 'Z-A') productsClone.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1));
    else if (order === 'Favorite') {
      const productFavorite = favorite.map((id) => productsClone.find((p) => p?.id === id));
      console.log('productFavorite: ', productFavorite);
      setProductFilters(productFavorite);
      return;
    }

    console.log('productsClone: ', productsClone);
    setProductFilters(productsClone);
  };

  return (
    <>
      <Container className='my-5 py-3 border border-2 rounded bg-dark text-white'>
        <form>
          <h2 className='pb-3'>Filters</h2>

          <div className='row g-3 align-items-center justify-content-center'>
            <div className='col-auto'>
              <label className='col-form-label'>By Product Name</label>
            </div>
            <div className='col-auto'>
              <input type='text' className='form-control' value={name} onChange={handleChange} />
            </div>

            <div className='col-auto'>
              <label className='col-form-label'>Sort by:</label>
            </div>
            <div className='col-auto'>
              <select className='form-select' alue={order} onChange={(event) => setOrder(event.target.value)}>
                <option value='Lowest Price (Frst)'>Lowest Price (Frst)</option>
                <option value='Highest Price (First)'>Highest Price (First)</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='Favorite'>Favorite</option>
              </select>
            </div>
          </div>
        </form>
      </Container>
      <Container className='products-gallery my-3 py-3'>
        {productFilters?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </Container>
    </>
  );
}
