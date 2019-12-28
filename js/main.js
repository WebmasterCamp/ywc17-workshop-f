import 'whatwg-fetch'

import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from './components/Landing.vue'

Vue.use(VueRouter)

Vue.prototype.store = Vue.observable({
	creators: [],
})

const router = new VueRouter({
	routes: [
		{path: '/', component: Landing},
	]
})

const app = new Vue({router}).$mount('#app')
