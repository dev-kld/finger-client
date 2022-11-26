import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';
import { COOKIE_ACCESS_TOKEN_EXPIRING_KEY, COOKIE_ACCESS_TOKEN_KEY } from '~/helpers/constants';
import { axiosInstance } from '~/services/http';
import { useStoreAccount } from '~/stores/account';
import { useStoreApp } from '~/stores/app';
import { useStoreUser } from '~/stores/user';
import type { ApiResponseAuthorization } from '~/types/api';

export const useUser = () => {
    const cookies = useCookies();
    const userStore = useStoreUser();
    const appStore = useStoreApp();
    const accountStore = useStoreAccount();

    const router = useRouter();

    const signIn = async (data: ApiResponseAuthorization) => {
        cookies.set(COOKIE_ACCESS_TOKEN_KEY, data.accessToken);
        cookies.set(COOKIE_ACCESS_TOKEN_EXPIRING_KEY, data.accessTokenExpiredAt);

        axiosInstance.defaults.headers.common['Authorization'] = data.accessToken;

        await Promise.all([userStore.$patch({ user: data.user }), appStore.fetchSettings(), accountStore.fetchAccounts()]);
        router.push({ name: 'Home' });
    };

    const logout = async () => {
        cookies.remove(COOKIE_ACCESS_TOKEN_KEY);
        cookies.remove(COOKIE_ACCESS_TOKEN_EXPIRING_KEY);

        await userStore.$patch({ user: null });
        router.push({ name: 'SignIn' });
    };

    return {
        signIn,
        logout
    };
};
