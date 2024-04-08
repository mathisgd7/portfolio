import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { usePrimeVue } from 'primevue/config'
import PrimeVue from "primevue/config";

const app = createApp(App)

app.use(PrimeVue);
app.use(router);

app.mount('#app')
