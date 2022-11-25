export interface UserData {
    id: number;
    email: string;
    name: string;
}

export interface UserSignUpData {
    email: UserData['email'];
    name: UserData['name'];
    password: string;
}

export interface UserSignInData {
    email: UserData['email'];
    password: string;
}
