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
            if (this.accounts) {
                return;
            }

            try {
                const response = await axiosInstance.get<ApiResponseAccounts>('/account/all');
                this.accounts = response.data.accounts;
            } catch (error) {
                console.error(error);
            }
        },

        async createAccount(data: AccountCandidate) {
            try {
                await axiosInstance.post('/account/create', data);
            } catch (error) {
                console.error(error);
            }
        },

        async deleteAccount(accountId: Account['_id']) {
            try {
                const response = await axiosInstance.delete('/account/delete', {
                    data: {
                        accountId
                    }
                });

                if (response.status === 200 && this.accounts) {
                    const index = this.accounts.findIndex((o) => o._id === accountId);
                    this.accounts.splice(index, 1);
                }
            } catch (error) {
                console.log(error);
            }
        },

        getAccountById(accountId: Account['_id']) {
            return this.accounts?.find((account) => account._id === accountId);
        }
    }
});
