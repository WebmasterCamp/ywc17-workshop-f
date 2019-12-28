import 'whatwg-fetch'

import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import store from './store'

import Landing from './pages/Landing.vue'
import Interests from './pages/Interests.vue'
import Result from './pages/Result.vue'
import Detail from './pages/Detail.vue'
import Payment from './pages/Payment.vue'
import FirstStory from './pages/FirstStory.vue'
import SecondStory from './pages/SecondStory.vue'
import ThirdStory from './pages/ThirdStory.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: [
    { path: '/', component: Landing },
    { path: '/interests', component: Interests },
    { path: '/list', component: Result },
    { path: '/detail/:id', component: Detail },
    { path: '/payment', component: Payment },
    { path: '/article/1', component: FirstStory },
    { path: '/article/2', component: SecondStory },
    { path: '/article/3', component: ThirdStory },
  ]
})

const app = new Vue({ el: '#app', router, store })

window.app = app
window.store = store
