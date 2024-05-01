import 'primevue/resources/themes/aura-light-green/theme.css'

import './scss/styles.scss'
import * as bootstrap from 'bootstrap'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";



const app = createApp(App)

app.use(PrimeVue);
app.use(router);

app.mount('#app')
