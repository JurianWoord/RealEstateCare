import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/homePage.vue'
import DefaultLayout from "@/layouts/defaultLayout.vue";

const routes = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        name: "home",
        path: '',
        component: HomePage,
      }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
