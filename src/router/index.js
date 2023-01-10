import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/login/Login.vue';
import NotFound from '../views/notFound/NotFound.vue';
import useAuth from "../store/auth";

import ListDevice from '../views/device/List.vue';
import CreateDevice from '../views/device/Create.vue';
import UpdateDevice from '../views/device/Update.vue';

import ListUser from '../views/user/List.vue';
import CreateUser from '../views/user/Create.vue';
import UpdateUser from '../views/user/Update.vue';

import Topic from '../views/topic/List.vue';
import CreateTopic from '../views/topic/Create.vue';

import Data from '../views/data/Data.vue';

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
        path: '/topic',
        name: 'ListTopic',
        component: Topic
    },
    {
        path: '/create_topic',
        name: 'CreateTopic',
        component: CreateTopic
    },
    {
        path: '/create_device',
        name: 'CreateDevice',
        component: CreateDevice
    },
    {
        path: '/device',
        name: 'ListDevice',
        component: ListDevice
    },
    {
        path: '/update_device/:id',
        name: 'UpdateDevice',
        component: UpdateDevice,
        props: true
    },
    {
        path: '/user',
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
    { path: "/:catchAll(.*)", component: NotFound }
]

const router = createRouter({ history: createWebHistory(), routes });

const protectedRoutes = [
    "CreateUser",
    "UpdateUser",
    "ListUser",
    "CreateDevice",
    "UpdateDevice",
    "ListDevice",
    "ListTopic"
]


router.beforeEach((to, from, next) => {
    const isProtected = protectedRoutes.includes(to.name)
    const auth = useAuth();
    if (isProtected && !auth.isAuthenticated.value) {
        next({
            path: '/'
        })
    } else next()
})




export default router;