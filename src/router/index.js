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

import DataPerTopic from '../views/data/topic/Data.vue';
import DataPerDevice from '../views/data/device/Data.vue';

import Sample from '../views/sample/Sample.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/data_topic',
        name: 'DataPerTopic',
        component: DataPerTopic,
    },
    {
        path: '/data_device',
        name: 'DataPerDevice',
        component: DataPerDevice,
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
    {
        path: '/sample',
        name: 'Sample',
        component: Sample
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
    "ListTopic",
    "DataPerTopic",
    "DataPerDevice",
    "Sample"
]


router.beforeEach(async (to, from, next) => {
    const auth = useAuth();
    const check = await auth.checkToken();
    if (to.name != 'Login' && to.name != 'DataPerTopic' && !check) {
        next({
            name: 'Login'
        })
    } else next();
})


export default router;