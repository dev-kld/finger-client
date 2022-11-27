interface ApiErrors {
    [key: number]: {
        description: string;
    };
}

export const API_ERRORS: ApiErrors = {
    2: {
        description: 'Пользователь не найден'
    },
    3: {
        description: 'Неверный логин или пароль'
    }
};
