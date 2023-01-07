import { createApp } from 'vue';

import "bootstrap/dist/css/bootstrap.css";
import './style.css';

import App from './App.vue';
import router from './router/index';

const app = createApp(App);
app.use(router);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
