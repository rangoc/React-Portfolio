// import React from 'react';  <---- not needed since React version 17^
import { useState } from 'react';
import './contact.scss';
import handshake from 'assets/shake.svg';
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handshake} alt="handshake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
