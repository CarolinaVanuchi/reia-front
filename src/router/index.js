import { createRouter, createWebHistory } from 'vue-router'
import Device from '../views/Device.vue';
import ListUser from '../views/user/List.vue';
import CreateUser from '../views/user/Create.vue';
import UpdateUser from '../views/user/Update.vue';
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
        path: '/list_user',
        name: 'ListUser',
        component: ListUser
    },
    {
        path: '/create_user',
        name: 'CreateUser',
        component: CreateUser
    },
    {
        path: '/update_user/:id',
        name: 'UpdateUser',
        component: UpdateUser,
        props: true
    },
]

const router = createRouter({ history: createWebHistory(), routes });



export default router;