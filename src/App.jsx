import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu.components';
import Footer from './components/footer/footer.components';

import Home from './layouts/Home';
import Store from './layouts/Store';
import Contact from './layouts/Contact';
import Login from './layouts/Login';
import Register from './layouts/Register';
import NotHome from './layouts/NotHome';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route index element={<Home />} />
          <Route path='store' element={<Store />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Register />} />
          <Route path='*' element={<NotHome />} />
          <Route />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}