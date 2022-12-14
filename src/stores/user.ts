import { defineStore } from 'pinia';
import { axiosInstance } from '~/services/http';
import type { UserData, UserSignInData, UserSignUpData } from '~/types/user';
import type { ApiResponseAuthorization } from '~/types/api';

interface State {
    user: UserData | null;
}

export const useStoreUser = defineStore('user', {
    state: (): State => ({
        user: null
    }),

    actions: {
        signUp(data: UserSignUpData) {
            return axiosInstance.post<ApiResponseAuthorization>('/user/sign-up', data);
        },

        signIn(data: UserSignInData) {
            return axiosInstance.post<ApiResponseAuthorization>('/user/sign-in', data);
        },

        async fetchUserData() {
            try {
                const response = await axiosInstance.get<{ user: UserData }>('/user/data');
                this.user = response.data.user;
            } catch (e) {
                console.error(e);
            }
        }
    }
});
