import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gltrx3k', 'template_0gxq156', form.current, 'nl3ygCuKYrBEKN6tg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <>
    <form ref={form} onSubmit={sendEmail}>
      <h1 className='contact-heading'> Contact Us  </h1>
      <div className='contact'>
<div className='right-section'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
</div>
<div className="left-section">
  <h1> gmail </h1>
  <h1> num </h1>
</div>
      </div>
    </form>
    </>

  );
};