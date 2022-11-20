import { createApp } from 'vue';
import { createPinia } from 'pinia';
import dayjs from 'dayjs';

import App from '~/App.vue';
import router from '~/router';

import '~/assets/styles/main.scss';
import { useCookies } from '@vueuse/integrations/useCookies';
import { COOKIE_ACCESS_TOKEN_EXPIRING_KEY, COOKIE_ACCESS_TOKEN_KEY } from './helpers/constants';
import { axiosInstance } from './services/http';

const app = createApp(App);
const store = createPinia();

app.use(store);
app.use(router);

const cookies = useCookies();

const onAppInit = () => {
    const accessToken = cookies.get(COOKIE_ACCESS_TOKEN_KEY);
    const accessTokenExpiredAt = cookies.get(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);

    if (accessToken && accessTokenExpiredAt) {
        const expiringDate = dayjs(accessTokenExpiredAt);
        const isAlive = expiringDate.isAfter(Date.now());

        if (!isAlive) {
            cookies.remove(COOKIE_ACCESS_TOKEN_KEY);
            cookies.remove(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);
        } else {
            axiosInstance.defaults.headers.common['Authorization'] = accessToken;
        }
    }
};

onAppInit();

app.mount('#app');
