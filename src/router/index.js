import { createRouter, createWebHistory } from 'vue-router'
import AvantiHomeView from '../views/avanti_home_view.vue'
import AvantiDocumentiView from '../views/avanti_documenti_view.vue'
import AvantiProfiloView from '../views/avanti_profile_view.vue'

const routes = [
  { path: '/', name: 'Home', component: AvantiHomeView },
  { path: '/documenti', name: 'Documenti', component: AvantiDocumentiView },
  { path: '/profilo', name: 'Profilo', component: AvantiProfiloView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
