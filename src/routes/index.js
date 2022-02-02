import { createWebHistory, createRouter } from 'vue-router'
import Home from'../components/pages/home.vue'
import Sources from'../components/pages/sources.vue'
import Source from'../components/pages/source.vue'
import Users from'../components/pages/users.vue'
import User from'../components/pages/user.vue'
import Login from'../components/pages/login.vue'
import Account from'../components/pages/account.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sources',
        name: 'Sources',
        component: Sources
    },
    {
        path: '/sources/:id',
        name: 'Source',
        component: Source
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/users/:id',
        name: 'User',
        component: User
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/login'];
    const authRequired = !publicPages.includes(to.path);
    const alreadyAuth = ['/login'].includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // Redirect to login if not auth
    if (authRequired && !loggedIn) {
      return next('/login');
    }

    // Redirect to account if auth
    if ( alreadyAuth && loggedIn) {
        return next('/account');
    }
  
    next();
  })

export default router