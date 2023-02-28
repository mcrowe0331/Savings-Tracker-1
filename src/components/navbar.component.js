import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-warning navbar-expand-lg">
      <Link to="/" className="navbar-brand">GitCredit</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Credits</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Credit Log</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;