import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Vuetify from './vuetify/vuetify';

const app = createApp(App);

app.use(createPinia());
app.use(Vuetify);

app.mount('#app');
