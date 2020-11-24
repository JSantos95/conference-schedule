import React, { useState, useEffect } from 'react';
import fetchPeople from "../api/people"
import Person from './Person';

const Speaker = () => {

  const [nameList, setList] = useState([]);

  useEffect(() => {
    fetchPeople().then(({ results }) => {
      console.log(results)
      setList(results)
    })
  }, []);

  const speakers = nameList.map(obj =>
    <Person key={obj.cell} name={obj.name.first + ' ' + obj.name.last} pic={obj.picture.large} />
  )

  return (
    <div>
      <h3 className="speaker-title">Cheak Out Our Fake Guest Speakers: </h3>
      <div className="speaker">
        {speakers}
      </div>
    </div>
  )
}

export default Speaker;
