import 'primevue/resources/themes/aura-light-green/theme.css'

import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import './assets/fontawesome/css/fontawesome.css'
import './assets/fontawesome/css/brands.css'
import './assets/fontawesome/css/solid.css'
import './assets/fontawesome/css/v4-font-face.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import DialogService from 'primevue/dialogservice';


const app = createApp(App)

app.use(DialogService);
app.use(PrimeVue);
app.use(router);

app.mount('#app')
