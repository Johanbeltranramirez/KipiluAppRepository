import axios from 'axios';

const ApiKipilu = axios.create({

  baseURL: 'http://192.168.1.6:3000/api',
  headers: {
  'Content-Type': 'application/json'
 }
});

export {ApiKipilu};