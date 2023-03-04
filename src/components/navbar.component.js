import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../context/Context";
import { useContext } from "react";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar navbar-expand lg navbar-light bg-info">
      <Link to="/" className="navbar-brand mb-0 h1">GitCredit</Link>
      
      <div className="container-fluid">
        {user ? (
          <div>
            <p>Welcome {user.username}</p>
          </div>
        ) : (
          <>
            <ul class="nav navbar-nav">
              <li className="nav-link">
                <Link className="nav-item active" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="nav-link">
                <Link className="nav-item active" to="/register">
                  REGISTER
                </Link>
              </li>
              <li className="nav-link" onClick={handleLogout}>LOGOUT
                {user && "LOGOUT"}
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;