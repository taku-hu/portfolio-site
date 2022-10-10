import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import NotFound from '@/components/pages/404Page.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import HomePage from '@/components/pages/HomePage.vue'
import SkillPage from '@/components/pages/SkillPage.vue'
import WorksPage from '@/components/pages/WorksPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillPage
  },
  {
    path: '/works',
    name: 'works',
    component: WorksPage
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
