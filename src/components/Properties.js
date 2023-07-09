import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing`)
      .then(
        (res) => setProperties(res.data),
        setAlert({
          message: 'Property successfully retrieved',
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: 'Server error. Please try again later.',
          isSuccess: false,
        })
      );
  }, []);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <div key={property._id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
