import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://taco-shop-c2d0c.firebaseio.com/'
})

export default instance;