import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="side-bar">
      <li className="sidebar-links-item">
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      </li>
      <li className="sidebar-links-item">
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      </li>
      <li className="sidebar-links-item">
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      </li>
      <li className="sidebar-links-item">
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      </li>
    </div>
  );
};

export default SideBar;
