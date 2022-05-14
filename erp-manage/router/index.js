import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [
    {
        path : '/',
        name : 'Main',
        component : ()=>import('../views/Main.vue'),
        redirect:'/home',
        children : [
            {
                path : '/home',
                name: 'home',
                component : () => import('../views/home')
            },
            {
                path: '/user',
                name: 'user',
                component : ()=>import('../views/User')
            },
            {
                path: '/order',
                name: 'order',
                component : ()=>import('../views/Order')
            },
            {
                path: '/page1',
                name: 'page1',
                component : ()=>import('../views/other/pageOne.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                component : ()=>import('../views/other/pageTwo.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router