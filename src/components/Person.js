import React from 'react';

const Person = (props) => {
  return (
    <div className="speaker-person">
      <div className="speaker-person-front speaker-person-card">
        <img className="speaker-person--img" src={props.pic} alt={props.name} width="128" height="128" />
        <h4 className="speaker-person--name">{props.name}</h4>
      </div>
      <div className="speaker-person-back speaker-person-card">
        <h4 className="speaker-person--title">About <i class="fas fa-user-tie"></i></h4>
        <p className="speaker-person--about">{props.name} has worked for Big Tech Company X as a Senior Y for Z years</p>
        <h4 className="speaker-person--title">Topic <i class="fas fa-chalkboard"></i></h4>
        <h5 className="speaker-person--topic">Some JS Framework 101</h5>
      </div>
    </div>
  )
}

export default Person;
