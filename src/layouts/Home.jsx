import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/hero-section/hero-section.components';

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=3');
    const temp = data?.results?.map((t) => {
      return {
        img: t.picture.large,
        fullName: `${t.name.first} ${t.name.last}`
      };
    });
    setTestimonials(temp);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <>
      <HeroSection />
      <div className='container my-4 py-2'>
        <h2 className='display-5 text-center p-0 m-0'>This is a title</h2>
        <div className='container cards'>
          <div className='card'>
            <img src={process.env.PUBLIC_URL + '/assets/img/01.jpg'} className='card-img-top' alt='img alternativa' />
            <div className='card-body'>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className='card'>
            <img src={process.env.PUBLIC_URL + '/assets/img/02.jpg'} className='card-img-top' alt='img alternativa' />
            <div className='card-body'>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className='card'>
            <img src={process.env.PUBLIC_URL + '/assets/img/03.jpg'} className='card-img-top' alt='img alternativa' />
            <div className='card-body'>
              <p className='card-text'>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid my-5 w-open'></div>
      <div className='container my-5 py-4'>
        <div className='row justify-content-center align-items-center'>
          <div className='col12 col-md-6 p-3'>
            <img
              src={process.env.PUBLIC_URL + '/assets/img/home3.jpg'}
              className='card-img-top'
              alt='img alternative'
            />
          </div>
          <div className='col12 col-md-6 p-3'>
            <h2>This is a title</h2>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eveniet ratione distinctio, quas
              soluta, dignissimos officia doloribus asperiores hic iusto fugiat. Nesciunt nihil non illum!
            </p>
          </div>
        </div>
        <div className='container d-flex justify-content-center align-items-center py-3'>
          <hr className='w-50' />
        </div>
        <div className='row justify-content-center align-items-center'>
          <div className='col12 col-md-6 p-3 text-end'>
            <h2>This is a title</h2>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eveniet ratione distinctio, quas
              soluta, dignissimos officia doloribus asperiores hic iusto fugiat. Nesciunt nihil non illum!
            </p>
          </div>
          <div className='col12 col-md-6 p-3'>
            <img
              src={process.env.PUBLIC_URL + '/assets/img/home5.jpg'}
              className='card-img-top'
              alt='img alternative'
            />
          </div>
        </div>
      </div>
      <div className='container my-4 py-2'>
        <h2 className='display-5 text-center p-0 m-0 pb-4'>Testimonials</h2>
        <div id='carouselExampleDark' className='carousel carousel-dark slide' data-bs-ride='carousel'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='1'
              aria-label='Slide 2'></button>
            <button
              type='button'
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='2'
              aria-label='Slide 3'></button>
          </div>
          <div className='carousel-inner'>
            {testimonials.map((t, index) => {
              return (
                <div
                  className={index === 0 ? 'carousel-item active' : 'carousel-item'}
                  data-bs-interval='200000'
                  key={index}>
                  <div className='carousel-caption'>
                    <img src={t?.img} className='rounded-circle pb-3 d-none d-md-inline' alt='...' />
                    <h5>{t?.fullName}</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque labore excepturi quibusdam a sit
                      tenetur eos quaerat optio laborum, maiores veniam suscipit dolor fuga amet. Quos doloribus, sequi,
                      perferendis voluptatem vel expedita laborum, quidem reiciendis voluptatibus magni dolore
                      cupiditate non.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
