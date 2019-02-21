<template>
	<div>
	<router-view/>
	<ul class="change">
		<li><router-link to="/home/Left"><img src="../assets/foot1.png" alt=""><p class="p1">首页</p></router-link> </li>
		<li><router-link to="/home/Order"><img src="../assets/foot2.png" alt=""><p>订单</p> </router-link> </li>
		<li><router-link to="/home/Personal"><img src="../assets/foot3.png" alt=""><p>我的</p></router-link> </li>
	</ul>
	</div>
</template>

<script>
import "../assets/style/reset.css";
export default {
  data() {
    return {};
  }
};
</script>

<style scoped="scoped" >
li {
  list-style: none;
}
a {
  list-style: none;
}
.change {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  background: #ffffff;
  z-index: 10;
}
.change li {
  /* display: flex; */
  flex: 1;
  text-align: center;
}
img {
  width: 30px;
  height: 30px;
  margin-top: 2px;
}
p {
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 14px;
  color: #999;
}
.p1 {
  color: #333;
}
</style>
