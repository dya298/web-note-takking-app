import axios from "axios";

// const BASE_URL = "https://eager-fawn-overcoat.cyclic.app";
const BASE_URL = "http://localhost:3000";
const TOKEN = JSON.parse(localStorage.getItem('access_token'));

const headers = TOKEN ?
  {    
    'Authorization': `Bearer ${TOKEN}`
  } :''

export default axios.create({
  baseURL: BASE_URL,
  headers: headers
});