import type { Account } from './account';
import type { Currency } from './app';
import type { UserData } from './user';

export interface ApiResponseAuthorization {
    accessToken: string;
    accessTokenExpiredAt: number;
    user: UserData;
}

export interface ApiResponseBase {
    currencies: Currency[];
}

export interface ApiResponseAccounts {
    accounts: Account[];
}
