export default function Contact() {
  return (
    <>
      <div className='container my-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-md-8 p-3'>
            <form action=''>
              <h2 className='pb-3'>Contact</h2>
              <div class='mb-3'>
                <label for='formControlFullName' class='form-label'>
                  Full Name:
                </label>
                <input type='text' class='form-control' id='formControlFullName' placeholder='Raul Farias S.' />
              </div>

              <div class='mb-3'>
                <label for='formControlEmailAddress' class='form-label'>
                  Email address:
                </label>
                <input type='email' class='form-control' id='formControlEmailAddress' placeholder='name@example.com' />
              </div>

              <div class='mb-3'>
                <label for='formControlSubject' class='form-label'>
                  Subject:
                </label>
                <input type='text' class='form-control' id='formControlSubject' placeholder='Subject' />
              </div>

              <div class='mb-3'>
                <label for='formControlMessage' class='form-label'>
                  Message:
                </label>
                <textarea class='form-control' id='formControlMessage' rows='6'></textarea>
              </div>

              <button type='submit' class='btn btn-dark w-100'>
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
          <div className='col-12 col-md-4'>
            <h2 className='h2 lh-lg fw-bold text-center'>Lorem, ipsum.</h2>
            <p className='lead text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt aut. Possimus nemo doloremque odio
              sequi molestias id, voluptatem ab eos, maiores dicta harum asperiores nesciunt est? Hic, accusamus alias.
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <h2 className='h2 lh-lg fw-bold text-center'>Lorem, ipsum.</h2>
            <p className='lead text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt aut. Possimus nemo doloremque odio
              sequi molestias id, voluptatem ab eos, maiores dicta harum asperiores nesciunt est? Hic, accusamus alias.
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <h2 className='h2 lh-lg fw-bold text-center'>Lorem, ipsum.</h2>
            <p className='lead text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nesciunt aut. Possimus nemo doloremque odio
              sequi molestias id, voluptatem ab eos, maiores dicta harum asperiores nesciunt est? Hic, accusamus alias.
            </p>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <h2 className='fs-1 fw-semibold lh-lg text-center'>Find us here</h2>
      </div>
    </>
  );
}
