import React from 'react';

const Info = () => {
  return (
    <div className="info">
      <h2 className="info-title"><i className="fas fa-map-marker-alt"></i> Location</h2>
      <div className="info-content">
        <p className="info-content--text">65-30 Kissena Blvd, Flushing, NY 11367</p>
        <p className="info-content--text">Near the Queens College Diner</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.9460697343231!2d-73.81727167868226!3d40.737008317560026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2613f8c11bf75%3A0xc424cffb0632a64f!2sQueens%20College%20Diner!5e0!3m2!1sen!2sus!4v1605934566462!5m2!1sen!2sus" className="info-content--map" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="location"></iframe>
      </div>
      <h2 className="info-title"><i className="fas fa-hamburger"></i> Food</h2>
      <div className="info-content">
        <p className="info-content--text">They'll be coffee and bagels in the Morning <br/> Sandwiches in the Afternoon <br/> And pizza in the Evening<br/> We have free Kosher and Halah options <br/></p>
        <p className="info-content--text">Subways, Dunkin Donuts, and Chinese Resturants on Kissena Ave <br/>Food Trucks by Kiely Hall on Campus</p>
      </div>
    </div>
  )
}

export default Info;
