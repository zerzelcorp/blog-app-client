import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">BloggerTrotter</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item active">
        <Link to="/" className="nav-link">Home<span className="sr-only"></span></Link>
      </li> 
      <li className="nav-item">
        <Link className="nav-link" to="/profile">My Profile</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My account
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/account">Config</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/">Log out</Link>
        </div>
      </li>

    </ul>

  </div>
</nav>
  );
};
