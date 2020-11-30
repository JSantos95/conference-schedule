import React from 'react';

const MiniNav = () => {
  return(
    <div class="miniNav">
      <ul className="miniNav-list">
        <li className="miniNav-list--item">
          <Link to="/" className="miniNav-list--link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="miniNav-list--item">
          <Link to="/streams/schedule" className="miniNav-list--link">
            <i className="fas fa-calendar-week"></i> Schedule
          </Link>
        </li>
        <li className="miniNav-list--item">
          <Link to="/streams/info" className="miniNav-list--link">
           <i className="fas fa-info-circle"></i> Info
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MiniNav;
