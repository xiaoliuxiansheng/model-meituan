<template>
   <div class="city">
         <div class="city-h">
			 <div class="left">
            <i class="search"></i>
			<div class="search-city" >
				<input v-model="str" type="text" placeholder="城市中文名或拼音" @keyup="search">
        <span class="sp1" v-show="seen" @click="cx"></span>
				
			</div>
     
			</div> 
			<div class="qx">取消</div>
		 </div>
		 <div class="city-content" v-show="content">
			 <div class="city-right">
              <span>#</span>
			  <a  v-for="item in city.data.classify_nav "   >{{item .idx}}
				  	<!-- <ul>
						  <li v-for="i in item">{{i}}</li>
					  </ul> -->

			  </a>
			 </div>
       <div class="city-center" >
             <div class="center-top">
                    <i></i>
                      当前定位城市
                  <span>重庆市</span>
              </div>
              <div class="center-hc" v-show="content">
                  <p>热门城市</p>
                        <div>
                           <router-link to="/search">
                          <span v-for="item in city.data.hot_city">{{item.city_name}}</span>
                           </router-link>
                        </div>
              </div>

              <div class="name"  >
                <div v-for="(item,index) in city.data.city_nav" class="name-N">
                  <p class="city-name">{{item.idx}}</p>
                  <ul v-for="x in item" class="list">   <router-link to="/search">
                    <li v-for="c in x">
                     
                      {{c.city_name}}
                        </li></router-link >
                  </ul>
                </div>
              </div>
       </div>
		 </div>
     <div class="list2" v-show="flag">
          <ul >
            <li  v-for="item in arr">
              <router-link to="/search">
                {{item.city_name}}
                </router-link >
                </li>
              
          </ul>
           <!-- <ul>
            <li  >
                <span ></span></li>
              
          </ul> -->
     </div>
   </div>

</template>

<script>
export default {
  data() {
    return {
      str: "",
      list: -1,
      content: true,
      flag: false,
      arr: [],
      seen: false,
      arr1: []
    };
  },
  computed: {
    city() {
      return this.$store.state.city;
    }
  },
  created() {
    this.$store.dispatch("city");
  },
  methods: {
    search() {
      this.city.data.city_nav.forEach((item, index) => {
        if (this.str.length > 0) {
          this.flag = true;
          this.seen = true;
          this.content = false;
          if (this.str.slice(0, 1).toUpperCase() == item.idx) {
            this.arr = item.cities;
            // console.log(this.arr);
            this.arr = this.arr.filter(item2 => {
              return item2.city_pinyin.includes(this.str);
            });
          } else if (escape(this.str).indexOf("%u") >= 0) {
            console.log(item.cities);
            // item.cities.forEach(item3 => {
            item.cities.filter(item2 => {
              if (item2.city_name.search(this.str) == 0) {
                this.arr.push(item2);
                // console.log(this.arr1);
                //    this.arr1=this.arr
              }
              // return item2.city_name.includes(this.str);console.log(item2.city_name);
            });

            // if(this.str.slice(0, 1))
            // });
          }
        } else {
          this.arr = [];
          this.flag = false;
          this.seen = false;
          this.content = true;
        }
      });
    },
    cx() {
      this.content = true;
      this.flag = false;
      this.str = "";
    }
  }
};
</script>

<style lang="scss" scoped>
$cs: 25;
.city {
  background: #fff;
  font-size: 16 / $cs + rem;
  font-family: "Hiragino Sans GB", Arial, Helvetica, "\5B8B\4F53", sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
  color: #666;
}
.city-h {
  width: 100%;
  padding: 10 / $cs + rem 15 / $cs + rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16 / $cs + rem;
  color: #999;
  z-index: 1;
  background: #fff;
  box-sizing: border-box;
  border-bottom: 0.5 / $cs + rem solid #e4e4e4;
  // display: flex;
}
.search {
  display: inline-block;
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/city-search.png) no-repeat;
  background-size: 100% 100%;
  margin-top: -2 / $cs + rem;
  vertical-align: middle;
}
.search-city {
  margin-left: 7 / $cs + rem;
  display: inline-block;
  // flex: 1 0 0;
  width: 85%;
  position: relative;
}
.search-city input {
  width: 100%;
  font-size: 14 / $cs + rem;
  line-height: 22 / $cs + rem;
  border: none;
  outline: none;
  -webkit-appearance: none;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: #999;
}
.left {
  float: left;
  width: 85%;
}
.qx {
  width: 15%;
  text-align: center;
  margin-top: 5 / $cs + rem;
  float: right;
}
.city-content {
  margin-top: 42 / $cs + rem;
  overflow: auto;
  position: relative;
  // height: 568 / $cs + rem;
}
.city-right {
  position: fixed;
  right: 0;
  top: 20%;
  width: 10%;
  color: #999;
  text-align: center;
  line-height: 16 / $cs + rem;
}
.city-right a {
  display: block;
  color: #999;
  line-height: 16 / $cs + rem;
}
.city-center {
  width: 90%;
  overflow: auto;
  position: relative;
}
.center-top {
  font-size: 16 / $cs + rem;
  color: #333;
  padding: 15 / $cs + rem;
}
.center-top i {
  display: inline-block;
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/city-dw.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 5 / $cs + rem;
}
.center-top span {
  color: #ffb000;
  margin-left: 5 / $cs + rem;
}
.center-hc {
  padding: 15 / $cs + rem 0 15 / $cs + rem 15 / $cs + rem;
  font-size: 14 / $cs + rem;
}
.center-hc p {
  color: #999;
}
.center-hc > div span {
  display: inline-block;
  width: 22.73%;
  text-align: center;
  border: 1 / $cs + rem solid #eee;
  border-radius: 2 / $cs + rem;
  font-size: 14 / $cs + rem;
  line-height: 35 / $cs + rem;
  box-sizing: border-box;
  margin: 10 / $cs + rem 1.13% 0 1.13%;
}
.name {
  width: 100%;
}
.name-N {
  width: 100%;
  background: #fff;
}
.city-name {
  font-size: 14 / $cs + rem;
  background-color: #eee;
  padding-left: 15 / $cs + rem;
  line-height: 25 / $cs + rem;
}
.list {
  width: 100%;
  padding-left: 15 / $cs + rem;
  box-sizing: border-box;
}
.list li {
  font-size: 16 / $cs + rem;
  line-height: 42 / $cs + rem;
  list-style: none;
  border-bottom: 0.5 / $cs + rem solid #e4e4e4;
}
.list2 {
  background: #fff;
  z-index: 111;
  // height: 3000 / $cs + rem;
  width: 100%;
  padding-left: 15 / $cs + rem;
  box-sizing: border-box;
  position: absolute;
  top: 42.5 / $cs + rem;
  left: 0;
  overflow: auto;
  right: 0;
  overflow-y: auto;
}
.list2 li {
  padding: 10 / $cs + rem 0;
  margin-right: 30 / $cs + rem;
  position: relative;
  font-size: 16 / $cs + rem;
  color: #333;
  border-bottom: 0.5 / $cs + rem solid #e4e4e4;
}
.sp1 {
  position: absolute;
  right: 4%;
  top: 50%;
  margin-top: -8 / $cs + rem;
  width: 15 / $cs + rem;
  height: 15 / $cs + rem;
  background: url(../assets/qx.png) no-repeat;
  background-size: 100% 100%;
}
</style>

