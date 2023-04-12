// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/visitor/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     name: 'delete',
    //     path: '/delete/:id',
    //     // component: AllPosts
    //     component: () => import('@/views/Posts/AllPosts.vue'),
    // },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
