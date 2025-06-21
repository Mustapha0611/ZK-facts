import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

// PrimeVue Toast
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura'
import Toast from 'primevue/toast'
import 'primeicons/primeicons.css'

// Theme and icons
// import 'primevue/resources/themes/aura-light-blue/theme.css' // or any theme you prefer



const app = createApp(App)

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        
    }
 });
app.use(ToastService)
app.use(createPinia())
app.use(router)
app.component('Toast', Toast)

app.mount('#app')