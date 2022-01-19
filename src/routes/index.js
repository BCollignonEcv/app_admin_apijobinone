import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/home.vue'
import Sources from '../views/sources'
import Source from '../views/source'
import Users from '../views/users'
import User from '../views/user'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })

export default router