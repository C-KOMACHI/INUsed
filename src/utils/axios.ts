import Axios from 'axios';

export const axios = Axios.create({
    baseURL: import.meta.env.MODE === 'development' ? window.location.origin : 'https://api.inused.store',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
