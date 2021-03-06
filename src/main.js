import { createApp } from 'vue'
import App from './App.vue'
import VueSignaturePad from 'vue-signature-pad';

createApp(App)
.use(VueSignaturePad)
.mount('#app')
