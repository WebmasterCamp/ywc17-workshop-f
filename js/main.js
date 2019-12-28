import 'whatwg-fetch'

import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import Landing from './pages/Landing.vue'
import Interests from './pages/Interests.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{path: '/', component: Landing},
		{path: '/interests', component: Interests},
	]
})

const app = new Vue({el: '#app', router, store})

window.app = app
window.store = store
