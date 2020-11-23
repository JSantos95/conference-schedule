import React from 'react';

const Person = (props) => {
  return (
    <div className="speaker-person">
      <div className="speaker-person-front speaker-person-card">
        <img className="speaker-person--img" src={props.pic} alt={props.name} width="128" height="128" />
        <h4 className="speaker-person--name">{props.name}</h4>
      </div>
      <div className="speaker-person-back speaker-person-card">
        <h4 className="speaker-person--title"><i className="fas fa-user-tie"></i> About</h4>
        <p className="speaker-person--about">{props.name} has worked for Big Tech Company X as a Senior Y for Z years</p>
        <h4 className="speaker-person--title"><i className="fas fa-chalkboard"></i> Topic</h4>
        <p className="speaker-person--topic">Some Framework 101</p>
        <div className="speaker-person--social">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
    </div>
  )
}

export default Person;
