import axios from 'axios';

const fetchPeople = () => {
  return axios
    .get('https://randomuser.me/api/?inc=cell,name,picture?results=15')
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err)
    });
}

export default fetchPeople;
