import React from 'react';
import '../../App.css';

export default function Services() {
  return (
    <div>
      <h1 className='services'>SERVICES</h1>
      <ul>
        <li>
          <div className="service-box">
            <i className="fas fa-camera" />
            <span>Photography</span>
            <div className="service-info">
              <p>Capture the magic of your event with our professional photography services.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-box">
            <i className="fas fa-utensils" />
            <span>Catering</span>
            <div className="service-info">
              <p>Delicious food and drinks to impress your guests. Our catering team will work with you to create a customized menu.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-box">
            <i className="fas fa-calendar" />
            <span>Event Planning</span>
            <div className="service-info">
              <p>Let us take care of the details. Our event planning team will work with you to create a seamless and unforgettable experience.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-box">
            <i className="fas fa-building" />
            <span>Venues</span>
            <div className="service-info">
              <p>Choose from our selection of unique and stunning venues to make your event truly unforgettable.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}