import Vue from 'vue'
import VueRouter from 'vue-router'
import ConnexionView from "../views/ConnexionView"
import CreateCompteView from "../views/CreateCompteView"
import CreateTrajetView from "../views/CreateTrajetView"
import CovoiturageRechercheView from "../views/CovoiturageRechercheView"
Vue.use(VueRouter)

const routes = [
  {
    path: '/ConnexionView',
    name: 'ConnexionView',
    component: ConnexionView
  },
  {
    path: '/CreateCompteView',
    name: 'CreateCompteView',
    component: CreateCompteView
  },
  {
    path: '/CreateTrajetView',
    name: 'CreateTrajetView',
    component: CreateTrajetView
  },
  {
    path: '/ConnexionView',
    name: 'ConnexionView',
    component: ConnexionView
  },
  {
    path: '/CovoiturageRechercheView',
    name: 'CovoiturageRechercheView',
    component: CovoiturageRechercheView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
