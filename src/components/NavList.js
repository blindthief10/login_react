import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavList extends Component {
  render() {
    return (
      <ul className="nav my-4">
        <li className="nav-item">
          <NavLink to="/user" className="nav-link">Main</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user/dashboard" className="nav-link">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/user/friends" className="nav-link">Your Friends</NavLink>
        </li>
        <li className="nav-item float-right">
          <button className="btn btn-danger btn-sm">Sign Out</button>
        </li>
      </ul>
    )
  }
}
