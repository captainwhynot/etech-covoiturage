import Vue from 'vue'
import VueRouter from 'vue-router'
import ConnexionView from "../views/ConnexionView"
import CreateCompteView from "../views/CreateCompteView"
import CreateTrajetView from "../views/CreateTrajetView"
import CovoiturageRechercheView from "../views/CovoiturageRechercheView"
import MesCovoituragesView from "../views/MesCovoituragesView"
import DetailsCovoiturageView from "../views/DetailsCovoiturageView"
import AccueilView from "../views/AccueilView"
import MonProfilView from "../views/MonProfilView"
import ReserverCovoiturageView from "../views/ReserverCovoiturageView"
import MesReservationsView from "../views/MesReservationsView"

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'AccueilView',
    component: AccueilView

  },
  {
    path: '/ReserverCovoiturageView',
    name: 'ReserverCovoiturageView',
    component: ReserverCovoiturageView

  },

  {
    path: '/MesReservationsView',
    name: 'MesReservationsView',
    component: MesReservationsView

  },


  {
    path: '/MonProfilView',
    name: 'MonProfilView',
    component: MonProfilView
  },

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
  {
    path: '/MesCovoituragesView',
    name: 'MesCovoituragesView',
    component: MesCovoituragesView
  },
  {
    path: '/DetailsCovoiturageView',
    name: 'DetailsCovoiturageView',
    component: DetailsCovoiturageView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
