import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-aa1af.firebaseio.com/'
});

export default instance;