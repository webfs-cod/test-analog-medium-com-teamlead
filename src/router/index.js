import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Authorization from "../views/Authorization";
import Edit from "../views/Edit";
import Create from "../views/Create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
