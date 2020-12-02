import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-con">
      <div className="header">
        <Link to="/" className="header-title-link">
          <h1 className="header-title">Techathon</h1>
        </Link>

        <ul className="header-nav">
          <li className="header-nav--item">
            <Link to="/" className="header-nav--link">
              <i className="fas fa-home"></i> <span className="header-nav--link_text">Home</span>
            </Link>
          </li>
          <li className="header-nav--item">
            <Link to="/streams/schedule" className="header-nav--link">
              <i className="fas fa-calendar-week"></i> <span className="header-nav--link_text">Schedule</span>
            </Link>
          </li>
          <li className="header-nav--item">
            <Link to="/streams/info" className="header-nav--link">
             <i className="fas fa-info-circle"></i> <span className="header-nav--link_text">Info</span>
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Header;
