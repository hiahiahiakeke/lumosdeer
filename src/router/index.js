import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'
import map from '../views/Map.vue'
import timeline from '../views/Timeline.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/map',
    name: 'map',
    component: map
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: timeline
  }
]

const router = new VueRouter({
  routes
})

export default router
