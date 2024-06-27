import React from 'react';

const BusinessCard = ({ business }) => {
  return (
    <div className="business-card">
      <img src={business.image} alt={business.name} />
      <h2>{business.name}</h2>
      <p>{business.description}</p>
      <ul>
        {business.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <button>Contact {business.name}</button>
    </div>
  );
};

export default BusinessCard;