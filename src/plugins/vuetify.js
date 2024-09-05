/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
//import { useAppStore } from '@/store/appStore';

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme') || 'light',
    themes: {
      light:{
        colors: {
          primary: '#00aaa2',
          secondary: '#475E6C',
        },
      },
      dark:{
        colors: {
          primary:'#475E6C',
          secondary: '#475E6C',
        }
      }
    }
  },
})
