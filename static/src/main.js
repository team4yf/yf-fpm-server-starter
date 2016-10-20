import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

import AppRouter from './router'

const router = new VueRouter({
  saveScrollPosition: true
})

AppRouter(router)

router.start(App, '#app')
