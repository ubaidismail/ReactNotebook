import React from 'react';
import PropTypes from 'prop-types';
import {

  Link
} from "react-router-dom";


export default function Header(props) {
  return <div className='header bg-dark w-30'>
    <div className='logo'>
      <h1 className='text-white'>Logo</h1>
    </div>
    <nav classNameName="navbar navbar-expand-sm bg-light">

      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Verify</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>

    </nav>
  </div>

}

