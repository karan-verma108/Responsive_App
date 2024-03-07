import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((oldVal) => {
      return {
        ...oldVal,
        [name]: value
      }
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (data.name === '' || data.email === '' || data.phone === '' || data.msg === '') {
      Swal.fire({
        title: 'Field missing!',
        text: 'Please enter the empty input field',
        icon: 'error'
      });
    } else {
      Swal.fire({
        title: "Message sent!",
        text: `Your name ${data.name}, email is ${data.email}, number is ${data.phone} and your message is : ${data.msg}`,
        icon: "success"
      });
    }
  }

  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" autoComplete='off' name='name' value={data.name} onChange={InputEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address" autoComplete='off' name='email' value={data.email} onChange={InputEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="number" className="form-control" id="phone" placeholder="Enter your mobile number" autoComplete='off' name='phone' value={data.phone} onChange={InputEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" name='msg' value={data.msg} onChange={InputEvent} ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact