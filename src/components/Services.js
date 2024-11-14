import React from 'react';
import './Services.css';

function Services() {
  return (
    <>

      
    <section id="services" className="services-section">
        <h2>Our Services</h2>
        <p>We offer comprehensive AI solutions tailored to meet the unique needs of our clients. </p>
       <p> From conceptualization to implementation, we provide end-to-end services to ensure successful project delivery.
        </p>
        <div className="service-cards">
          <div className="service-card">
            <h3>Generative AI</h3>
            <p>Create and innovate with AI-generated content.</p>
          </div>
          <div className="service-card">
            <h3>NLP</h3>
            <p>Enhance your applications with advanced natural language processing.</p>
          </div>
          <div className="service-card">
            <h3>Vision</h3>
            <p>Leverage AI for image and video analysis.</p>
          </div>
          <div className="service-card">
            <h3>Audio</h3>
            <p>Transform audio experiences with AI-powered solutions.</p>
          </div>
        </div>
        </section>
          
         

</>
  );
}

export default Services;
