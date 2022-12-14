import { createApp } from 'vue';
import { createPinia } from 'pinia';
import dayjs from 'dayjs';

import App from '~/App.vue';
import router from '~/router';

import '~/assets/styles/main.scss';
import { useCookies } from '@vueuse/integrations/useCookies';
import { COOKIE_ACCESS_TOKEN_EXPIRING_KEY, COOKIE_ACCESS_TOKEN_KEY } from './helpers/constants';
import { axiosInstance } from './services/http';
import { useStoreUser } from '~/stores/user';
import { useStoreApp } from './stores/app';

const app = createApp(App);
const store = createPinia();

app.use(store);

const cookies = useCookies();
const userStore = useStoreUser();
const appStore = useStoreApp();

const onAppInit = async () => {
    const accessToken = cookies.get(COOKIE_ACCESS_TOKEN_KEY);
    const accessTokenExpiredAt = cookies.get(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);

    if (!accessToken || !accessTokenExpiredAt) {
        return;
    }

    const isTokenAlive = dayjs(accessTokenExpiredAt).isAfter(Date.now());

    if (!isTokenAlive) {
        cookies.remove(COOKIE_ACCESS_TOKEN_KEY);
        cookies.remove(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);

        return;
    }

    axiosInstance.defaults.headers.common['Authorization'] = accessToken;

    try {
        await Promise.all([userStore.fetchUserData(), appStore.fetchBase()]);
    } catch (e) {
        console.error(e);
    }
};

const startServer = async () => {
    await onAppInit();

    app.use(router);
    app.mount('#app');
};

startServer();
