import React from 'react';
import '../../App.css';

export default function Photography() {
  return (
    <div
      style={{
        backgroundImage: 'url(/public/images/img-5.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className='photography'>Photography</h1>
      <div className="photography-gallery">
        <div className="image-container">
          <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Photography Example 1" />
          <p>Capture the magic of your event with our professional photography services. Our team of experienced photographers will work with you to create stunning and memorable images that will last a lifetime.</p>
        </div>
        <div className="image-container">
          <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Photography Example 2" />
          <p>From candid moments to posed portraits, our photographers will capture every special moment of your event.</p>
        </div>
        <div className="image-container">
          <img src="https://www.w3schools.com/html/img_chania.jpg" alt="Photography Example 3" />
          <p>Our photography services include:</p>
          <ul>
            <li>Event coverage</li>
            <li>Portrait sessions</li>
            <li>Photo booths</li>
          </ul>
        </div>
      </div>
      <style>
        {`
         .photography-gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
         .image-container {
            margin: 20px;
            width: 300px;
          }
         .image-container img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
