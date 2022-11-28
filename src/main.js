// import Vue from "vue";
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App';
import router from './routes/index';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
