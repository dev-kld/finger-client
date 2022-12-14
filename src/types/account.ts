import type { Currency } from './app';

export interface Account {
    id: number;
    name: string;
    initialBalance: number;
    balance: number;
    currency: Currency['code'];
}

export type AccountCandidate = Pick<Account, 'name' | 'initialBalance' | 'currency'>;
