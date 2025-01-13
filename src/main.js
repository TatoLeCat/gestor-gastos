import './assets/main.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  PrimeVue  from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: 'none'
})


import Menubar from 'primevue/menubar';

import Chart from 'primevue/chart';



app.component('Menubar', Menubar)
app.component('Chart', Chart)

app.mount('#app')
