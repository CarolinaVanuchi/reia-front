import "bootstrap/dist/css/bootstrap.css";
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);
app.use(router);
app.mount('#app');

// createApp(App).mount('#app');
import "bootstrap/dist/js/bootstrap.js";
