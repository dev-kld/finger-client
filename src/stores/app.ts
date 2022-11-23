import { defineStore } from 'pinia';
import { axiosInstance } from '~/services/http';
import type { ApiResponseSettings } from '~/types/api';

interface State {
    settings: ApiResponseSettings;
}

export const useStoreApp = defineStore('app', {
    state: (): State => ({
        settings: {
            currency: [],
            accountTypes: []
        }
    }),

    actions: {
        async fetchSettings() {
            try {
                const response = await axiosInstance.get<ApiResponseSettings>('/settings');
                this.settings = response.data;
            } catch (e) {
                console.log(e);
            }
        }
    }
});
