import { createRouter, createWebHistory } from 'vue-router'
import Device from '../views/Device.vue';
import ListUser from '../views/user/List.vue';
import CreateUser from '../views/user/Create.vue';
import UpdateUser from '../views/user/Update.vue';
import Login from '../views/login/Login.vue';
import Data from '../views/Data.vue';
import Topic from '../views/Topic.vue';
import NotFound from '../views/notFound/NotFound.vue';
import useAuth from "../store/auth";

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
    { path: "/:catchAll(.*)", component: NotFound }
]

const router = createRouter({ history: createWebHistory(), routes });

const protectedRoutes = [
    "CreateUser",
    "UpdateUser",
    "ListUser",
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