import type { UserData } from './user';

export interface ApiResponseSignUp extends UserData {
    accessToken: string;
    accessTokenExpiredAt: string;
}
