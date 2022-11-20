export const useNavigation = () => {
    const navigation = {
        home: { icon: 'home', title: 'Главная' },
        analytics: { icon: 'activity', title: 'Аналитика' },
        history: { icon: 'book', title: 'История' },
        profile: { icon: 'user', title: 'Профиль' }
    } as const;

    return navigation;
};
