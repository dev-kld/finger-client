export interface UserData {
    id: number;
    login: string;
    name: string;
}

export interface UserSignInData {
    login: UserData['login'];
    name: UserData['name'];
    password: string;
}
