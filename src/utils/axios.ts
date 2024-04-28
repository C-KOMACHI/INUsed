import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'http://ec2-18-205-241-235.compute-1.amazonaws.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});
