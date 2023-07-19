import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

const SideBar = () => {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString('query', { title: { $regex: query } });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <strong>Filter by city</strong>
      <ul>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
        </li>
        <strong>Sort by</strong>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('sort', { price: 1 })}>Price Ascending</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('sort', { price: -1 })}>Price Descending</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
