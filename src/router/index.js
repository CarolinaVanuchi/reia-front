import { createRouter, createWebHistory } from 'vue-router'
import Device from '../views/Device.vue';
import User from '../views/User.vue';
import Login from '../views/Login.vue';

const routes = [
    {
        path: '/device',
        name: 'Device',
        component: Device
    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router