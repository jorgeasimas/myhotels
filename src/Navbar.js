import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="sign-in" to="/edit">
        Admin
      </Link>
      <a href="" className="shop">
        Meetings & Events
      </a>
      <Link to="/itemspage">Offers</Link>
    </div>
  );
}
