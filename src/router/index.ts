import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuardianasView from '../views/GuardianasView.vue'
import ApiusmeView from '../views/ApiusmeView.vue'
import EquipoView from '../views/EquipoView.vue'
import AcercaSandra from '../views/AcercaSandra.vue'
import AcercaYaneth from '../views/AcercaYaneth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guardianas',
      name: 'guardianas',
      component: GuardianasView,
    },
    {
      path: '/apiusme',
      name: 'apiusme',
      component: ApiusmeView,
    },
    {
      path: '/equipo',
      name: 'equipo',
      component: EquipoView,
    },
    {
      path: '/acerca-sandra',
      name: 'acerca-sandra',
      component: AcercaSandra,
    },
    {
      path: '/acerca-yaneth',
      name: 'acerca-yaneth',
      component: AcercaYaneth,
    }
  ],

  scrollBehavior(to, from, savedPosition){
    if (savedPosition){ return savedPosition }
    else { return { top: 0 }}
  },
})

export default router
