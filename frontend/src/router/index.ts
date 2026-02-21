import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/public/HomeView.vue')
        },
        {
            path: '/problems',
            name: 'problems',
            component: () => import('../views/public/ProblemsList.vue')
        },
        {
            path: '/problem/:id',
            name: 'editor',
            component: () => import('../views/user/EditorView.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/user/DashboardView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/auth/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/auth/RegisterView.vue')
        },
        {
            path: '/admin/problems',
            name: 'admin-problems',
            component: () => import('../views/admin/ProblemCrud.vue')
        }
    ]
});

export default router;