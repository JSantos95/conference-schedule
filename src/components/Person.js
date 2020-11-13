import React from 'react';

const Person = (props) => {
  return (
    <div className="speaker-person">
      <img className="speaker-person--img" src={props.pic} alt={props.name} width="128" height="128" />
      <h4 className="speaker-person--name">{props.name}</h4>
    </div>
  )
}

export default Person;
