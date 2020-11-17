import React from 'react';

const Header = () => {
  return (
    <div className="header-con">
      <div className="header">
        <h1 className="header-title">Techathon</h1>
        <ul className="header-nav">
          <li className="header-nav--item">Home <i class="fas fa-home"></i></li>
          <li className="header-nav--item">Location <i class="fas fa-map-marker-alt"></i></li>
          <li className="header-nav--item">Food <i class="fas fa-utensils"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
