import type { UserData } from './user';

export interface ApiResponseAuthorization extends UserData {
    accessToken: string;
    accessTokenExpiredAt: string;
}
