//Axios is a promise based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
