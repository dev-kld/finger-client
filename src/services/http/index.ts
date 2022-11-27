import axios from 'axios';
import { vApi } from '~/config';
import { useStoreApp } from '~/stores/app';

const axiosInstance = axios.create({
    baseURL: `http://boilerplate-manager.herokuapp.com/${vApi}`,
    timeout: 1000 * 30,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const appStore = useStoreApp();

        appStore.addNotification({
            type: 'error',
            code: error.response.data.code,
            message: error.response.data.description
        });
    }
);

export { axiosInstance };
