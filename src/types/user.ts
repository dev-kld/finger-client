export interface UserData {
    _id: string;
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
