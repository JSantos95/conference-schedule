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
              Home <i class="fas fa-home"></i>
            </Link>
          </li>
          <li className="header-nav--item">
            <Link to="streams/schedule" className="header-nav--link">
            Schedule <i class="fas fa-calendar-week"></i>
            </Link>
          </li>
          <li className="header-nav--item">
            <Link to="/streams/info" className="header-nav--link">
              Info <i class="fas fa-info-circle"></i>
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Header;
