import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Roman-js/NewFeatures',
});

export const API = {
  getAllCats() {
    return instance
      .get('/arr')
      .then(res => res.data)
      .catch(error => console.log('errorAllCats: ', error));
  },
};
