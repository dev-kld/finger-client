import { defineStore } from 'pinia';
import { axiosInstance } from '~/services/http';
import type { Account, AccountCandidate } from '~/types/account';
import type { ApiResponseAccounts } from '~/types/api';

interface State {
    accounts: Account[] | null;
}

export const useStoreAccount = defineStore('account', {
    state: (): State => ({
        accounts: null
    }),

    actions: {
        async fetchAccounts() {
            try {
                if (this.accounts) {
                    return;
                }

                const response = await axiosInstance.get<ApiResponseAccounts>('/accounts');
                this.accounts = response.data.accounts;
            } catch (error) {
                console.log(error);
            }
        },

        async createAccount(data: AccountCandidate) {
            try {
                await axiosInstance.post('/accounts', data);
            } catch (error) {
                console.log(error);
            }
        }
    }
});
