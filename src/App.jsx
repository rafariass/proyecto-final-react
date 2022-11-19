import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu.components';
import Footer from './components/footer/footer.components';

import Home from './layouts/Home';
import Store from './layouts/Store';
import Contact from './layouts/Contact';
import Profile from './layouts/Profile';
import NotHome from './layouts/NotHome';
import ProductsContext from './services/Market.context';
import { useState, useEffect } from 'react';
import { NewPost } from './layouts/NewPost';
import ProductSummary from './layouts/ProductSummary';

export default function App() {
  const endpoint = '/products.json';

  const [products, setProducts] = useState([]);
  const [shopping, setShopping] = useState([]);

  const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts(endpoint);
  }, []);

  const sharedState = { products, setProducts, shopping, setShopping };

  return (
    <ProductsContext.Provider value={sharedState}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path='contact' element={<Contact />} />
            <Route path='profile' element={<Profile />} />
            <Route path='newproduct' element={<NewPost />} />
            <Route path='productSumary/:id' element={<ProductSummary />} />
            <Route path='*' element={<NotHome />} />
            <Route />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}
