import React, { useState } from 'react';
import '../styles/add-property.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '2 bed flat',
      type: '',
      bedrooms: '',
      bathrooms: '',
      price: '',
      city: 'Manchester',
      email: '',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="add-property" />
      <form onSubmit={handleAddProperty}>
        {/*  <label htmlFor="title">
          <input id="title" name="title" value={fields.title} onChange={handleFieldChange} />
        </label> */}
        <label htmlFor="bedrooms">
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            placeholder="no. of bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            placeholder="no. of bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          <input id="price" name="price" placeholder="price" value={fields.price} onChange={handleFieldChange} />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            placeholder="your.email@email.co.uk"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <br />
        <label htmlFor="type">
          <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="city">
          <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <br />
        <button className="search-button" type="submit">
          Add property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
