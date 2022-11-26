import type { RouteRecord } from 'vue-router';

interface NavigationItem {
    [key: string]: {
        icon: string;
        title: string;
        to: Pick<RouteRecord, 'name'>;
    };
}

export const useNavigation = () => {
    const navigation: NavigationItem = {
        home: { icon: 'home', title: 'Главная', to: { name: 'Home' } },
        analytics: { icon: 'activity', title: 'Аналитика', to: { name: 'Home' } },
        history: { icon: 'book', title: 'История', to: { name: 'Home' } },
        profile: { icon: 'user', title: 'Профиль', to: { name: 'Profile' } }
    };

    return navigation;
};
