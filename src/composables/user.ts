import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';
import { COOKIE_ACCESS_TOKEN_EXPIRING_KEY, COOKIE_ACCESS_TOKEN_KEY } from '~/helpers/constants';
import { useStoreUser } from '~/stores/user';
import type { ApiResponseAuthorization } from '~/types/api';

export const useUser = () => {
    const cookies = useCookies();
    const userStore = useStoreUser();

    const router = useRouter();

    const signIn = async (data: ApiResponseAuthorization) => {
        cookies.set(COOKIE_ACCESS_TOKEN_KEY, data.accessToken);
        cookies.set(COOKIE_ACCESS_TOKEN_EXPIRING_KEY, data.accessTokenExpiredAt);

        const user: Partial<ApiResponseAuthorization> = Object.assign({}, data);
        delete user.accessToken;
        delete user.accessTokenExpiredAt;

        await userStore.$patch({ user });
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
