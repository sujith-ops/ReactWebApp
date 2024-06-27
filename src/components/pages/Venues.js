// Venues.js
import React from 'react';
import VenueCard from './VenueCard';

const Venues = () => {
  const venues = [
    {
      id: 1,
      name: "The Fillmore",
      address: "1805 Geary Blvd, San Francisco, CA 94115",
      capacity: 1300,
      description: "Iconic music venue in San Francisco"
    },
    {
      id: 2,
      name: "The Greek Theatre",
      address: "2001 Gayley Rd, Berkeley, CA 94720",
      capacity: 8500,
      description: "Outdoor amphitheater in Berkeley"
    },
    {
      id: 3,
      name: "The Warfield",
      address: "982 Market St, San Francisco, CA 94102",
      capacity: 2300,
      description: "Historic theater in San Francisco"
    },
    {
      id: 4,
      name: "The Fox Theater",
      address: "1807 Telegraph Ave, Oakland, CA 94612",
      capacity: 2800,
      description: "Restored art deco theater in Oakland"
    },
    {
      id: 5,
      name: "The Independent",
      address: "628 Divisadero St, San Francisco, CA 94117",
      capacity: 500,
      description: "Intimate music venue in San Francisco"
    }
  ];

  return (
    <div>
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
};

export default Venues;