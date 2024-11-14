import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright &copy; Your Company 2023</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="'../components/About.js'">About Us</a></li>
              <li className="list-inline-item"><a href="'../components/Contact.js'">Contact Us</a></li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;