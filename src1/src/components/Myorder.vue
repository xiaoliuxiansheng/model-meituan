<template>
	<div>
		å†æ¥ä¸å
		<ul>
			<li v-for="item in header">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	import "../assets/style/reset.css"
	export default {
		data() {
			return {
			};
		},
		computed:{
			myorder(){
				return this.$store.state.myorder;
			}
		},
		created() {
			this.$store.dispatch("myorder");
		},
		mounted() {
			console.log(this.myorder)
		}
	}
</script>

<style scoped="scoped" lang="scss">

</style>
