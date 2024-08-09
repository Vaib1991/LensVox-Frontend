import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Feel free to reach out to us for any inquiries or further information.</p>
    </div>
  );
}

export default Contact;
