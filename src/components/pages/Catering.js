import React from 'react';
import '../../App.css';

export default function Catering() {
  return (
    <div
      style={{
        backgroundImage: 'url(/public/images/catering-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className='catering'>Catering Services</h1>
      <div className="catering-info">
        <h2>About Us</h2>
        <p>We are a team of experienced catering professionals dedicated to providing exceptional service and delicious food for your event.</p>
        <h2>Our Services</h2>
        <ul>
          <li>Customized menus for your event</li>
          <li>Professional event planning and coordination</li>
          <li>Experienced chefs and servers</li>
          <li>Flexible pricing options to fit your budget</li>
        </ul>
        <h2>Testimonials</h2>
        <p>"The food was amazing and the service was top-notch! We couldn't have asked for a better experience." - John D.</p>
        <p>"The catering team was so easy to work with and the food was delicious. We highly recommend them!" - Sarah K.</p>
        <h2>Contact Us</h2>
        <p>Phone: 555-555-5555</p>
        <p>Email: [info@cateringcompany.com](mailto:info@cateringcompany.com)</p>
        <p>Address: 123 Main St, Anytown, USA 12345</p>
      </div>
      <style>
        {`
         .catering-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }
         .catering-info h2 {
            margin-bottom: 10px;
          }
         .catering-info ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
         .catering-info li {
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
  );
}