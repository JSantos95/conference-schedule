import React, { useState, useEffect } from 'react';
import Faker from 'faker';
import Person from './Person';

const Speaker = () => {

  const [nameList, setList] = useState([]);

  // eslint-disable-next-line
  useEffect(() => {
    let arr = [];
    for(let i = 0; i < 15; i++) {
      let user = {
        id: i,
        name: Faker.name.firstName() + ' ' + Faker.name.lastName(),
        picture: Faker.image.avatar()
      }
      arr.push(user);
    }
    setList(arr);
  }, []);

  const speakers = nameList.map(obj =>
    <Person key={obj.id} name={obj.name} pic={obj.picture} />
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
