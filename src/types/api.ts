import type { AccountType, Currency } from './global';
import type { UserData } from './user';

export interface ApiResponseAuthorization {
    accessToken: string;
    accessTokenExpiredAt: string;
    user: UserData;
}

export interface ApiResponseSettings {
    currency: Currency[];
    accountTypes: AccountType[];
}
