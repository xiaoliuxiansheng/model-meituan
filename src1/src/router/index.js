import Vue from 'vue'
import Router from 'vue-router'
import myorder from '@/components/Myorder'
import home from '@/components/Home'
import city from '@/components/City'
import homeleft from '@/components/Left'
import homeorder from '@/components/Order'
import homepersonal from '@/components/Personal'
import content from '@/components/Content'
import search from '@/components/Search'
import axios from 'axios'

Vue.use(Router)
console.log(22);
console.log(content);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: {
				"name": "home"
			}
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			redirect: {
				"name": "homeleft"
			},
			children: [
				{
					path: '/home/left',
					name: 'homeleft',
					component: homeleft

				},
				{
					path: '/home/Order',
					name: 'homeOrder',
					component: homeorder
				},
				{
					path: '/home/Personal',
					name: 'homepersonal',
					component: homepersonal
				},
			]
		},
		{
			path: '/City',
			"name": "city",
			component: city
		},
		{
			path: '/content',
			"name": "content",
			component: content
		},
		{
			path: '/myorder',
			"name": "myorder",
			component: myorder
		},
		{
			path: '/search',
			"name": "search",
			component: search
		}
	]
})
