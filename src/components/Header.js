import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-con">
      <div className="header">

        <Link to="/" className="header-title-link">
          <h1 className="header-title">Techathon</h1>
        </Link>

        <div className="header-miniNav">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="header-nav">
          <li className="header-nav--item">
            <Link to="/" className="header-nav--link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="header-nav--item">
            <Link to="/streams/schedule" className="header-nav--link">
              <i className="fas fa-calendar-week"></i> Schedule
            </Link>
          </li>
          <li className="header-nav--item">
            <Link to="/streams/info" className="header-nav--link">
             <i className="fas fa-info-circle"></i> Info
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Header;
