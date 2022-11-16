import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/sign-in',
            name: 'SignIn',
            component: () => import('~/views/SignInView.vue')
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: () => import('~/views/SignUpView.vue')
        }
    ]
});

export default router;
