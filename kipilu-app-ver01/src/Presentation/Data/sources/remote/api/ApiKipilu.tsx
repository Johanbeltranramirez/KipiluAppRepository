import axios from 'axios';

const ApiKipilu = axios.create({

  baseURL: 'https://kipilubackendrepository-3.onrender.com/api',
  headers: {
  'Content-Type': 'application/json'
 }
});

export {ApiKipilu};
