/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'
import { createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app
  .use(pinia)
  .use(router)
  .mount('#app')
