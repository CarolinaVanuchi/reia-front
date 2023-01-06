import { createRouter, createWebHistory } from 'vue-router'
import Device from '../views/Device.vue';
import User from '../views/User.vue';
import Login from '../views/Login.vue';
import Data from '../views/Data.vue';
import Topic from '../views/Topic.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/data',
        name: 'Data',
        component: Data,
    },
    {
        path: '/device',
        name: 'Device',
        component: Device
    },
    {
        path: '/topic',
        name: 'Topic',
        component: Topic
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
]

const router = createRouter({ history: createWebHistory(), routes });



export default router;