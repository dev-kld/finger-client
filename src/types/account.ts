import type { AccountType, Currency } from './global';

export interface Account {
    id: number;
    name: string;
    initialBalance: number;
    balance: number;
    currency: Currency['code'];
    accountType: AccountType['code'];
}

export type AccountCandidate = Pick<Account, 'name' | 'initialBalance' | 'accountType' | 'currency'>;
