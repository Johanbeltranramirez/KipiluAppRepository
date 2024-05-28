import axios from 'axios';

const ApiKipilu = axios.create({

  baseURL: 'https://kipilubackendrepository-2.onrender.com/api',
  headers: {
  'Content-Type': 'application/json'
 }
});

export {ApiKipilu};