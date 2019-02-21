<template>
	<div class="search">
		  <div class="search-top">
                     <div class="top-left">
                             <i class="dw"></i>
              
							 <div class="dd">  <router-link to="/city">重庆
								<i class="list"></i>  </router-link>
							 </div>
               
							 
					 </div>
					 <div class="top-right">
						<i class="search"></i>
						<input type="text" placeholder="小区/街道/大厦/学校名称" @focus="dw" @blur="qx" v-model="str" @input="cz" >
            <i class="gb" v-show="gb" @click=" xs"></i>
					 </div>
					 <span class="right" v-show="flag" @click="xs">
  							取消
					 </span>
					 <span class="tip" v-show="seen">
                例如：安阳小区、北京大学
					 </span>
					
				  </div>
		    <div class="dqwz" v-show="dqwz" >
                 当前位置:
				 <span class="sp1">朝阳幼儿园(朝阳路)</span>
				 
			    <router-link to="/search"> <span class="sp2">重新定位 </span></router-link>
			 </div>

			 <div class="content" v-show="fjzz">
					<p>
						<i></i>附近地址
					</p>
					<ul v-for="x in list">
						<li><router-link to="/home/left">{{x}}</router-link></li>
					</ul>
			 </div>
            
	</div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      seen: false,
      dqwz: true,
      fjzz: true,
      gb: false,
      str: "",
      list: [
        "永缘寓乐圈",
        "朝阳幼儿园(朝阳路)",
        "欣蕊幼儿园",
        "二郎街道科城路社区文化室",
        "小精灵幼儿园"
      ]
    };
  },
  computed: {
    city() {
      return this.$store.state.city;
    }
  },
  methods: {
    dw() {
      if (this.str.length > 0) {
        // this.flag = false;
        this.seen = false;
        this.gb = true;
      } else {
        // this.flag = true;
        this.seen = true;
        this.gb = false;
      }
      this.flag = true;
      this.dqwz = false;
      this.fjzz = false;
    },
    qx() {
      if (this.str.length > 0) {
        this.dqwz = false;
        this.fjzz = false;
        this.gb = true;
      } else {
        this.dqwz = true;
        this.fjzz = true;
        this.gb = false;
      }
      this.flag = true;
      this.seen = false;
    },
    cz() {
      if (this.str.length > 0) {
        // this.flag = false;
        this.seen = false;
        this.gb = true;
      } else {
        // this.flag = true;
        this.seen = true;
        this.gb = false;
      }
    },
    xs() {
      this.flag = false;
      this.dqwz = true;
      this.fjzz = true;
      this.gb = false;
      this.str = "";
    }
  }
};
</script>

<style lang="scss" scoped>
$cs: 25;
a {
  color: #666;
}
.search {
  width: 100%;
  color: #333;
  font-size: 16 / $cs + rem;
}
.search-top {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 45 / $cs + rem;
  padding: 8 / $cs + rem 15 / $cs + rem 8 / $cs + rem 10 / $cs + rem;
  background-color: #fff;
  box-sizing: border-box;
  font-size: 14 / $cs + rem;
  border-bottom: 0.5 / $cs + rem solid #e4e4e4;
}
.top-left {
  display: inline-block;
}
.dw {
  display: inline-block;
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/city-dw.png) no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}
.dd {
  width: 30 / $cs + rem;
  padding: 4 / $cs + rem 5 / $cs + rem;
  line-height: 22 / $cs + rem;
  display: inline-block;
  position: relative;
}
.list {
  position: absolute;
  right: -7%;
  top: 50%;
  margin-top: -4 / $cs + rem;
  width: 8 / $cs + rem;
  height: 8 / $cs + rem;
  content: " ";
  background: url(../assets/list.png) no-repeat;
  background-size: 100% 100%;
  transform: rotateZ(180deg);
}
.top-right {
  margin-left: 14 / $cs + rem;
  display: inline-block;
  position: relative;
}
.gb {
  position: absolute;
  right: 4%;
  top: 50%;
  margin-top: -7 / $cs + rem;
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/qx.png) no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}
.top-right .search {
  display: inline-block;
  width: 14 / $cs + rem;
  height: 14 / $cs + rem;
  background: url(../assets/city-search.png) no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
}
.top-right input {
  // width: 100%;
  font-size: 14 / $cs + rem;
  line-height: 22 / $cs + rem;
  margin: 4 / $cs + rem 0;
  border: none;
}
.right {
  width: 28 / $cs + rem;
  line-height: 14 / $cs + rem;
  //   margin-left: 10 / $cs + rem ;
  text-align: center;
  color: #999999;
  vertical-align: middle;
  padding-left: 5 / $cs + rem;
  box-sizing: border-box;
  border-left: 0.5 / $cs + rem solid #e4e4e4;
}
.dqwz {
  padding-left: 15 / $cs + rem;
  margin: 20 / $cs + rem 0 10 / $cs + rem;
  font-size: 16 / $cs + rem;
  color: #333;
}
.sp1 {
  display: inline-block;
  font-weight: 600;
  margin-left: 6 / $cs + rem;
  max-width: 140 / $cs + rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: text-bottom;
}
.sp2::before {
  display: inline-block;
  content: " ";
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/hs.png) no-repeat;
  background-size: cover;
  vertical-align: text-bottom;
  margin-right: 3 / $cs + rem;
}
.sp2 {
  font-size: 14 / $cs + rem;
  color: #ffb000;
  vertical-align: middle;
}
.content {
  background-color: #fff;
  width: 100%;
}
.content > p {
  padding: 15 / $cs + rem 0 10 / $cs + rem 15 / $cs + rem;
  font-size: 14 / $cs + rem;
  color: #999;
}
.content > p > i {
  display: inline-block;
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/fj.png) no-repeat;
  background-size: cover;
  vertical-align: text-bottom;
  margin-right: 5 / $cs + rem;
}
.content ul {
  width: 100%;
  padding-left: 15 / $cs + rem;
  box-sizing: border-box;
}
.content ul li {
  font-size: 16 / $cs + rem;
  padding: 20 / $cs + rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 0.5 / $cs + rem solid #e4e4e4;
}
.tip {
  background: #fccf4b;
  height: 31 / $cs + rem;
  line-height: 31 / $cs + rem;
  padding: 0 8 / $cs + rem;
  position: absolute;
  color: #333;
  top: 40 / $cs + rem;
  z-index: 201;
  left: 98 / $cs + rem;
  border-radius: 5 / $cs + rem;
}
.tip::after {
  content: "";
  display: inline-block;
  position: absolute;
  border-style: solid;
  border-width: 0 5 / $cs + rem 5 / $cs + rem 5 / $cs + rem;
  border-color: transparent transparent #fccf4b transparent;
  left: 18 / $cs + rem;
  top: -5 / $cs + rem;
}
</style>
