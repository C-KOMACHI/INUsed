import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'https://api.inused.store/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});
