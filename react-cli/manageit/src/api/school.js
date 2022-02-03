import axios from 'axios';

const schoolApi = axios.create({
  baseURL: 'https://ssik.in/api/',
});

export default schoolApi;
