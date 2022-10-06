import { createApp } from 'vue'
import App from './App.vue'
import axios        from 'axios';
import router       from './route/index';

window.axios = axios;
createApp(App).use(router).mount('#app')
