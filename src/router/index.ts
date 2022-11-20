import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active-link',
    routes: [
        {
            path: '/',
            name: 'Home',
            meta: {
                bottomMenu: true
            },
            component: () => import('~/views/index.vue')
        },
        {
            path: '/sign-in',
            name: 'SignIn',
            component: () => import('~/views/sign-in.vue')
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: () => import('~/views/sign-up.vue')
        },
        {
            path: '/accounts/create',
            name: 'CreateAccount',
            component: () => import('~/views/accounts/create.vue')
        }
    ]
});

export default router;
