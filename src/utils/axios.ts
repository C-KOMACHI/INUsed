import Axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

export const axios = Axios.create({
    baseURL: 'https://api.inused.store',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
    },
});
