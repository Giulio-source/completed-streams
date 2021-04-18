import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Header() {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <Link to="/">Streamers</Link>
      </div>
      <div className="links-container">
        <Link to="/streams/create">Stream</Link>
        <Link to="/login">Login</Link>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
}

export default Header;
