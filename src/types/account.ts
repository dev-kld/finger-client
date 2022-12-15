import type { Currency } from './app';

export interface Account {
    _id: string;
    name: string;
    initialBalance: number;
    balance: number;
    currencyCode: Currency['code'];
}

export type AccountCandidate = Pick<Account, 'name' | 'initialBalance' | 'currencyCode'>;
