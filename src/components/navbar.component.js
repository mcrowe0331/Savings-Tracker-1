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
    <nav className="navbar navbar-light bg-warning navbar-expand-lg">
      <Link to="/" className="navbar-brand">GitCredit</Link>
      <div className="topLeft">
        {user ? (
          <div>
            <p>Welcome {user.username}</p>
          </div>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
              <li className="topListItem" onClick=      {handleLogout}>LOG OUT
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