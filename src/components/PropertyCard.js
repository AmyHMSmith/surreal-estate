import React from 'react';
import logo from '../logo/logo.png';

const handleEmailClick = () => {
  document.location.href = 'mailto:someone-else@example.com';
};

const PropertyCard = ({ title, type, bathrooms, bedrooms, price, city }) => {
  return (
    <div className="property-card">
      <img className="logo" src={logo} alt="Logo" />
      <div className="property-card__title">{title}</div>
      <div className="property-card__type">{type}</div>
      <div className="property-card__city">{city}</div>
      <div className="property-card__bathrooms">{bathrooms}</div>
      <div className="property-card__bedrooms">{bedrooms}</div>
      <div className="property-card__price">{price}</div>
      <div className="email-button">
        <button className="email-button" type="button" onClick={handleEmailClick}>
          Send email
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
