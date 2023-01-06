import { createApp } from 'vue';

import "bootstrap/dist/css/bootstrap.css";
import './style.css';

import App from './App.vue';
// import { createPinia } from 'pinia';
import router from './router/index';

// const pinia = createPinia();
// app.use(pinia);
const app = createApp(App);
// createApp(App).use(createPinia()).use(router).mount('#app');

app.use(router);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
