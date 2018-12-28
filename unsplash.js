import axios from 'axios';


export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
     Authorization: 'Client-ID 3f1d017126f24cd15ca78664e3ef5780e559fb20f55290e6c7c5c08d25814b5d'
  }
});
