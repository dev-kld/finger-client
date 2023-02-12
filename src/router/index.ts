import { createRouter, createWebHistory } from 'vue-router';
import { useStoreUser } from '~/stores/user';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active-link',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/sign-in',
            name: 'SignIn',
            meta: {
                authRoute: true,
                bottomMenuHidden: true,
                headerHidden: true
            },
            component: () => import('~/views/sign-in.vue')
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            meta: {
                authRoute: true,
                bottomMenuHidden: true,
                headerHidden: true
            },
            component: () => import('~/views/sign-up.vue')
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('~/views/index.vue')
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('~/views/profile/index.vue')
        },
        {
            path: '/accounts',
            name: 'Accounts',
            redirect: { name: 'Home' },
            children: [
                {
                    path: 'create',
                    name: 'CreateAccount',
                    component: () => import('~/views/accounts/create.vue')
                },
                {
                    path: ':id',
                    name: 'AccountDetails',
                    component: () => import('~/views/accounts/_id.vue')
                }
            ]
        },
        {
            path: '/records',
            name: 'Records',
            redirect: { name: 'Home' },
            children: [
                {
                    path: 'create',
                    name: 'CreateRecord',
                    component: () => import('~/views/records/create.vue')
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    const userStore = useStoreUser();
    const { user } = userStore;

    if (to.matched.some((r) => r.meta.authRoute)) {
        user ? next({ name: 'Home' }) : next();
    } else {
        user ? next() : next({ name: 'SignIn' });
    }
});

export default router;
