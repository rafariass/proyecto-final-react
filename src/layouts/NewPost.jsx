import React, { useContext, useState } from 'react';
import Context from '../services/Market.context';

export const NewPost = () => {
 const { products, setProducts } = useContext(Context);

  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      return false;
    }

    const newProduct = { name, img, desc, price };
    setProducts([...products, newProduct]);

    alert('Producto agregado con exito...');
    resetForm();
  };

  const validateForm = () => {
    if (!name) {
      alert('El campo nombre producto es requerido...');
      return true;
    } else if (!img) {
      alert('El campo img es requerido...');
      return true;
    } else if (!desc) {
      alert('El campo description es requerido...');
      return true;
    } else if (!price) {
      alert('El campo price es requerido...');
      return true;
    } else {
      return false;
    }
  };

  const resetForm = () => {
    setName('');
    setImg('');
    setDesc('');
    setPrice('');
  };

  return (
    <>
      <div className='p-4 dashboard'>
        <form onSubmit={handlesubmit}>
          <h2 className='pb-3'>New Post</h2>

          <div className='mb-3'>
            <label className='form-label'>Product name:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Product Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Link Img:</label>
            <input
              type='text'
              className='form-control'
              placeholder='https://....'
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Description:</label>
            <textarea
              className='form-control'
              rows='6'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>

          <div className='mb-3'>
            <label className='form-label'>Price:</label>
            <input
              type='number'
              className='form-control'
              placeholder='60000'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type='submit' className='btn btn-dark w-100'>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};
