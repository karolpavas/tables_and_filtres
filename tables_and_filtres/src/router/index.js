import { createRouter, createWebHashHistory } from 'vue-router'
import HomeTable from '../views/Table/HomeTable.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTable
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
