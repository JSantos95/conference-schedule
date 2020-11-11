import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">React Super Conference</h1>
      <ul className="header-nav">
        <li className="header-nav--item">Home</li>
        <li className="header-nav--item">Location</li>
        <li className="header-nav--item">Food</li>
      </ul>
    </div>
  )
}

export default Header;
