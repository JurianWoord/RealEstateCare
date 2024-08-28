import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/homePage.vue'
import DefaultLayout from "@/layouts/defaultLayout.vue";
import inspectionlistPage from "@/pages/inspectionlistPage.vue";
import LoginPage from "@/pages/loginPage.vue";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: HomePage,
        meta: { requiresAuth: true },
      },
      {
        name: 'inspectionlist',
        path: 'inspectionlist',
        component: inspectionlistPage,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
