import React from 'react';
import BusinessCard from './BusinessCard';

const businesses = [
  {
    id: 1,
    name: 'Business 1',
    description: 'Description of Business 1',
    services: ['Wedding Planning', 'Event Coordination'],
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Business 2',
    description: 'Description of Business 2',
    services: ['Catering', 'Bartending'],
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Business 3',
    description: 'Description of Business 3',
    services: ['Photography', 'Videography'],
    image: 'https://via.placeholder.com/150'
  },
  // Add more businesses here
];

const EventPlanning = () => {
  return (
    <div className="event-planning-page">
      <h1>Event Planning</h1>
      <p>Find the perfect business to help plan your event</p>
      <div className="business-grid">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default EventPlanning;