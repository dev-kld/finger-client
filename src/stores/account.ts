import { defineStore } from 'pinia';

interface State {}

export const useStoreAccount = defineStore('account', {
    state: (): State => ({})
});
