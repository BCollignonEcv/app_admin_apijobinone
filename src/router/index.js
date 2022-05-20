import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.view.vue'
import { useUserStore } from '@/stores/User.store'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/job/:id',
        name: 'Job',
        component: () =>
            import('../views/Job.view.vue')
    },
    {
        path: '/account',
        name: 'Account',
        component: () =>
            import('../views/Account.view.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import('../views/Login.view.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import('../views/Register.view.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import('../views/About.view.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () =>
            import('../views/NotFound.view.vue')
    },
    ]
})

router.beforeEach((to) => {
    const userStore = useUserStore()
    if (to.name !== 'Login' && to.name !== 'Register' && !userStore.isLogged){
        return { name: 'Login' }
    }
    if ((to.name === 'Register' ||to.name === 'Login')  && userStore.isLogged){
        return { name: 'Home' }
    }
})

export default router