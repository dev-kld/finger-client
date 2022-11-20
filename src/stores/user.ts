import { defineStore } from 'pinia';
import { axiosInstance } from '~/services/http';
import type { UserData, UserSignInData } from '~/types/user';
import type { ApiResponseSignUp } from '~/types/api';

interface State {
    user: UserData | null;
}

export const useStoreUser = defineStore('user', {
    state: (): State => ({
        user: null
    }),

    actions: {
        signUp(data: UserSignInData) {
            return axiosInstance.post<ApiResponseSignUp>('/auth/register', data);
        }
    }
});
