import { createApp } from 'vue';
import { createPinia } from 'pinia';
import dayjs from 'dayjs';

import App from '~/App.vue';
import router from '~/router';

import '~/assets/styles/main.scss';
import { useCookies } from '@vueuse/integrations/useCookies';
import { COOKIE_ACCESS_TOKEN_EXPIRING_KEY, COOKIE_ACCESS_TOKEN_KEY } from './helpers/constants';
import { axiosInstance } from './services/http';
import type { UserData } from '~/types/user';
import { useStoreUser } from '~/stores/user';

const app = createApp(App);
const store = createPinia();

app.use(store);

const cookies = useCookies();
const userStore = useStoreUser();

const startServer = async () => {
    const onAppInit = async () => {
        const accessToken = cookies.get(COOKIE_ACCESS_TOKEN_KEY);
        const accessTokenExpiredAt = cookies.get(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);

        if (accessToken && accessTokenExpiredAt) {
            const isTokenAlive = dayjs(accessTokenExpiredAt).isAfter(Date.now());

            if (!isTokenAlive) {
                cookies.remove(COOKIE_ACCESS_TOKEN_KEY);
                cookies.remove(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);
            } else {
                axiosInstance.defaults.headers.common['Authorization'] = accessToken;

                const userData = await axiosInstance.get<UserData>('/auth/check-token');
                userStore.$patch({ user: userData.data });
            }
        }
    };

    await onAppInit();

    app.use(router);
    app.mount('#app');
};

startServer();
