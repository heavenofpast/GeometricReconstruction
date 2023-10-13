import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home.vue";
import Index from "@/components/Index.vue";
import History from "@/components/History.vue";
import Detail from "@/components/Detail.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/index',
        component: Home,
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index
            },
            {
                path: '/history',
                name: 'history',
                component: History
            },
            {
                path: '/detail',
                name: 'detail',
                component: Detail
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router