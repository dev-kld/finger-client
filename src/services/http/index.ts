import axios from 'axios';
import { vApi } from '~/config';

const axiosInstance = axios.create({
    baseURL: `https://boilerplate-manager.herokuapp.com/${vApi}`,
    timeout: 1000 * 30,
    headers: {
        'Content-Type': 'application/json'
    }
});

export { axiosInstance };
