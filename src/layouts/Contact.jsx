import { useState } from 'react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    const newMessage = { fullName, emailAddress, subject, message };

    if (validateForm()) {
      return false;
    }

    console.log('newMessage: ', newMessage);
    alert('Mensaje enviado');

    resetForm();
  };

  const validateForm = () => {
    if (!fullName) {
      alert('El campo nombre es requerido...');
      return true;
    } else if (!emailAddress) {
      alert('El campo direccion de email es requerido...');
      return true;
    } else if (!subject) {
      alert('El campo asunto es requerido...');
      return true;
    } else if (!message) {
      alert('El campo mensaje es requerido...');
      return true;
    } else {
      return false;
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmailAddress('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <div className='container my-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-md-8 p-3'>
            <form onSubmit={handlesubmit}>
              <h2 className='pb-3'>Contact</h2>
              <div className='mb-3'>
                <label className='form-label'>
                  Full Name:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Raul Farias S.'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Email address:
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='name@example.com'
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Subject:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                  Message:
                </label>
                <textarea
                  className='form-control'
                  rows='6'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <button type='submit' className='btn btn-dark w-100'>
                Send Message
              </button>
            </form>
          </div>
          <div className='col-12 col-md-4 p-3'>
            <img src={process.env.PUBLIC_URL + '/assets/img/contact.jpg'} className='img-fluid' alt='' />
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-11 col-md-4'>
            <h2 className='h2 lh-lg fw-bold text-center'>Lorem, ipsum.</h2>
            <p className='lead text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt aut. Possimus nemo doloremque odio
              sequi molestias id, voluptatem ab eos, maiores dicta harum asperiores nesciunt est? Hic, accusamus alias.
            </p>
          </div>
          <div className='col-11 col-md-4'>
            <h2 className='h2 lh-lg fw-bold text-center'>Lorem, ipsum.</h2>
            <p className='lead text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt aut. Possimus nemo doloremque odio
              sequi molestias id, voluptatem ab eos, maiores dicta harum asperiores nesciunt est? Hic, accusamus alias.
            </p>
          </div>
          <div className='col-11 col-md-4'>
            <h2 className='h2 lh-lg fw-bold text-center'>Lorem, ipsum.</h2>
            <p className='lead text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt aut. Possimus nemo doloremque odio
              sequi molestias id, voluptatem ab eos, maiores dicta harum asperiores nesciunt est? Hic, accusamus alias.
            </p>
          </div>
        </div>
      </div>
      <div className='container my-5 pb-5'>
        <h2 className='fs-1 fw-semibold lh-lg text-center'>Find us here</h2>
        <div className='container-fluid pt-3 pb-5'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6658.531164411137!2d-70.66624272311239!3d-33.4423866313568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5aeb442096f%3A0xe8771f5b59513c1f!2sAgustinas%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1668863931161!5m2!1sen!2scl'
            className='g-maps'
            title='Find us here'
            loading='lazy'></iframe>
        </div>
      </div>
    </>
  );
}
