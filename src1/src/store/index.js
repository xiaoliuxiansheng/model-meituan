import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios'

vue.use(vuex);
var store = new vuex.Store({
	state: {
		myorder: [],
		city: [],
		distance: [],
		volume: [],
		Order: [],
		header: [],
		//添加
		distance01: [],
		distance02: [],
		food: []
	},
	mutations: {
		keepmyorder(state, p) {
			state.myorder = p
		},
		keepOrder(state, p) {
			state.Order = p
		},
		keepcity(state, p) {
			state.city = p
		},
		keepdistance(state, p) {
			state.distance = p
		},
		keepvolume(state, p) {
			state.volume = p
		},
		keepheader(state, p) {
			state.header = p
		},
		//添加
		keepdistance01(state, p) {
			state.distance01 = p
		},
		keepdistance02(state, p) {
			state.distance02 = p
		},
		keepfood(state, p) {
			state.food = p
		}
	},
	actions: {
		Order(context, p) {
			axios.get("http://localhost:3000/Order").then((res) => {
				context.commit("keepOrder", res)
			})
		},
		myorder(context, p) {
			axios.get("http://localhost:3000/myorder").then((res) => {
				context.commit("keepmyorder", res)
			})
		},
		city(context, p) {
			axios.get("http://localhost:3000/city").then((res) => {
				context.commit("keepcity", res)
			})
		},
		volume(context, p) {
			axios.get("http://localhost:3000/volume").then((res) => {
				context.commit("keepvolume", res.data.shopList)   //修改
			})
		},
		header(context, p) {
			axios.get("http://localhost:3000/header").then((res) => {
				console.log(1);
				console.log(res);
				context.commit("keepheader", res)
			})
		},
		distance(context, p) {
			axios.get("http://localhost:3000/distance").then((res) => {
				context.commit("keepdistance", res.data.shopList)   //修改
			})
		},
		//添加
		distance01(context, p) {
			axios.get("http://localhost:3000/distance01").then((res) => {

				context.commit("keepdistance01", res.data)
			})
		},
		distance02(context, p) {
			axios.get("http://localhost:3000/distance02").then((res) => {


				context.commit("keepdistance02", res.data.shopList)
			})
		},
		food(context, p) {
			axios.get("http://localhost:3000/food").then((res) => {
				console.log(11);
				console.log(res);
				context.commit("keepfood", res)
			})
		}
	}
})
export default store;