import React, { useState } from 'react';
import axios from 'axios';
import '../styles/add-property.css';
import Alert from './Alert';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      type: '',
      bedrooms: '',
      bathrooms: '',
      price: '',
      city: '',
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: '', isSuccess: false });

    axios
      .post(`http://localhost:3000/api/v1/PropertyListing`, fields)
      .then(() =>
        setAlert({
          message: 'Property Added',
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: 'Server error. Please try again later.',
          isSuccess: false,
        })
      );
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="add-property" />
      <form onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="label">
          <label htmlFor="title">
            Property Description
            <div className="input" />
            <input
              id="title"
              name="title"
              placeholder="2 bedroom flat"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="label">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              placeholder="no. of bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="label">
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              placeholder="no. of bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="label">
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              placeholder="GBP 150,000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="label">
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              placeholder="your.email@email.co.uk"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="label">
          <label htmlFor="type">
            Type
            <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
              <option> ---</option>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="label">
          <label htmlFor="city">
            City
            <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
              <option> ---</option>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <button className="search-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
