import React from 'react';
const VenueCard = ({ venue }) => {
    return (
      <div className="venue-card">
        {venue.image && <img src={venue.image} alt={venue.name} />}
        <h2>{venue.name}</h2>
        <p>{venue.description}</p>
        {venue.services && (
          <ul>
            {venue.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        )}
        <button>Contact {venue.name}</button>
      </div>
    );
  };
  
export default VenueCard;