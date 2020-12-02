import React from 'react';
import { Link } from 'react-router-dom';

const MiniNav = () => {
  return(
    <div class="miniNav" id="miniNav">
      <a href="#" class="miniNav--close">&times;</a>
      <div className="miniNav-list">
        <Link to="/" className="miniNav-list--link">
          <a herf="#"><i className="fas fa-home"></i> Home</a>
        </Link>
        <Link to="/streams/schedule" className="miniNav-list--link">
          <i className="fas fa-calendar-week"></i> Schedule
        </Link>
        <Link to="/streams/info" className="miniNav-list--link">
         <i className="fas fa-info-circle"></i> Info
        </Link>
      </div>
    </div>
  )
}

export default MiniNav;
