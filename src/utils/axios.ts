import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'https://api.inused.store',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
