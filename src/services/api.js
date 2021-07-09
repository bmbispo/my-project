import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-desafio-blockub.herokuapp.com/docs/#/default/AppController_login'
});

export default api;