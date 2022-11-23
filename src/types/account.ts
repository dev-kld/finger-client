import type { AccountType, Currency } from './global';

export interface Account {
    id: number;
    name: string;
    balance: number;
    currency: Currency['code'];
    accountType: AccountType['code'];
}

export type AccountCandidate = Omit<Account, 'id'>;
