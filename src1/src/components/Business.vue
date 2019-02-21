<template>
    <div class="business">
        
        <ul class="title">
            <li><span @click="dj"><span>综合排序</span><i :class="{xz:flag}"></i></span></li>
            <li @click="xljudj(2)">销量最高</li>
            <li @click="xljudj(3)">距离最近</li>
            <li><span @click="ssdj">筛选</span><i></i></li>    
            
            <div class="screen" v-if="ssflag">
              <div class="gund">
                <div class="screen01" v-for="(item,index) in screen01.multifilterVOList">
                      <div class="screentitle" v-if="'index===0'">{{item.groupTitle}}</div>
                      <ul class="screenli" :class="{'screenli3':index===2}">
                        <li v-for="items in item.filterItemList"><img :src="items.icon" alt=""><span>{{items.name}}</span></li>
                      </ul>
                </div>
              </div>
              <div class="btn">
                <span>清除筛选</span>
                <span>完成</span>
              </div>
            </div>
            <div class="zhp" v-show="flag">
                <ul>
                  <li v-for="(item,index) in screen01.sortVOList" v-show="index!=1">{{item.name}}</li>
                </ul>
            </div>
        </ul>
        <div class="busbody">
            <ul>
              <li v-for="item in distance02">
                <div class="bodyimg">
                  <img :src="item.picUrl" alt="">
                  <img :src="item.poiTypeIcon" alt="">
                </div>
                <div class="bodymain">
                    <div class="shopName">{{item.shopName}}</div>
                    <div class="main1">
                      <div class="start">
                        <i v-for="(asd,idx) in 5" :class="{heixin:idx-1>=parseInt(item.wmPoiScore/10)}"></i>
                        <span>{{(item.wmPoiScore/10).toFixed(1)}}</span>
                      </div>
                      <div class="time">
                        <span>{{item.deliveryTimeTip}}</span>
                        <span>{{item.distance}}</span>
                      </div>
                      
                    </div>
                    <div class="songcan">
                        <span>{{item.minPriceTip}}</span>
                        <span>{{item.shippingFeeTip}}</span>
                    </div>
                    <div class="zhekou">
                        <p v-for="(items,index) in item.discounts2" v-if="index<2">

                          <img :src="items.iconUrl" alt="">
                          <span>{{items.info}}</span>
                          <i @click="zhekoudj" :class="{zkpd:zkflag}" class="zkjt" v-if="index==0"></i>
                        </p>
                    </div>
                </div>
              </li>
            </ul>
        </div>

    </div>
</template>


<script>
export default {
  data() {
    return {
      flag: false,
      ssflag: false,
      zkflag: false,
      zknum: 2,
      anniu: 1
    };
  },
  computed: {
    screen01() {
      return this.$store.state.distance01;
    },
    // distance() {
    //   return this.$store.state.distance;
    // },
    // volume() {
    //   return this.$store.state.volume;
    // },
    distance02() {
      if (this.anniu === 1) {
        return this.$store.state.distance02;
      } else if (this.anniu === 2) {
        return this.$store.state.volume;
      } else if (this.anniu === 3) {
        return this.$store.state.distance;
      }
    }
  },
  created() {
    this.getScreenData();
    this.getDistance02();
    this.getVolume();
    this.getDistance();
  },
  methods: {
    dj() {
      this.ssflag = false;
      this.flag = !this.flag;
    },
    ssdj() {
      this.flag = false;
      this.ssflag = !this.ssflag;
    },
    zhekoudj() {
      if (this.zkflag) {
        this.zknum = 2;
        this.zkflag = !this.zkflag;
      } else {
        this.zknum = 50;
        this.zkflag = !this.zkflag;
      }
    },
    xljudj(val) {
      this.anniu = val;
      this.flag = false;
      this.ssflag = false;
    },
    getScreenData() {
      this.$store.dispatch("distance01");
    },
    getDistance02() {
      this.$store.dispatch("distance02");
    },
    getVolume() {
      this.$store.dispatch("volume");
    },
    getDistance() {
      this.$store.dispatch("distance");
    }
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
body {
  font-family: tahoma, arial, "Hiragino Sans GB", simsun, sans-serif;
}

.xz {
  transform: rotateZ(45deg) !important;
  margin-bottom: 0 !important;
}

.title {
  // margin-top: 50 / $sc + rem;
  display: flex;
  // text-align: center;
  height: 40 / $sc + rem;
  font-size: 14 / $sc + rem;
  color: #666;
  position: relative;
  width: 100%;
  li {
    flex: 1;
    line-height: 40 / $sc + rem;
    position: relative;
    text-align: center;
  }
  li:nth-of-type(1) {
    i {
      display: inline-block;
      width: 5 / $sc + rem;
      height: 5 / $sc + rem;
      margin: 0 0 3 / $sc + rem 5 / $sc + rem;
      border-top: 1 / $sc + rem solid #666;
      border-left: 1 / $sc + rem solid #666;
      transform: rotateZ(-135deg);
      margin-top: -10 / $sc + rem;
    }
  }
  li:nth-of-type(4) {
    i {
      display: inline-block;
      width: 15 / $sc + rem;
      height: 15 / $sc + rem;
      background: url(../assets/distance01.png) no-repeat;
      background-size: cover;
      vertical-align: text-bottom;
    }

    &::before {
      content: "";
      background: #e4e4e4;
      transform-origin: 0 0;
      position: absolute;
      left: 0;
      width: 1 / $sc + rem;
      height: 14 / $sc + rem;
      top: 50%;
      transform: scaleX(0.5) translateY(-50%);
    }
  }
  &::after {
    content: " ";
    width: 100%;
    height: 1 / $sc + rem;
    background: #e4e4e4;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    position: absolute;
    left: 0;
    top: 0;
  }
  &::before {
    content: " ";
    width: 100%;
    height: 1 / $sc + rem;
    background: #e4e4e4;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.screen {
  position: absolute;
  width: 100%;
  height: 325 / $sc + rem;
  top: 100%;

  background: #ffffff;
  z-index: 20;
  .gund {
    height: 275 / $sc + rem;
    overflow-y: auto;
  }
}
.screen01 {
  float: left;
  width: 100%;
  position: relative;
  padding: 15 / $sc + rem 0 5 / $sc + rem 15 / $sc + rem;
  font-size: 12 / $sc + rem;
  box-sizing: border-box;
  .screentitle {
    margin-bottom: 10 / $sc + rem;
    color: #999;
    font-size: 12 / $sc + rem;
    text-align: left;
  }
  &::after {
    content: " ";
    width: 100%;
    height: 1 / $sc + rem;
    background: #e4e4e4;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.screenli {
  float: left;
  width: 100%;
  li {
    float: left;
    width: 29.16%;
    color: #333;
    border: 1 / $sc + rem solid #ccc;
    border-radius: 1 / $sc + rem;
    text-align: center;
    line-height: 30 / $sc + rem;
    // display: inline-block;
    margin-right: 4.16%;
    margin-bottom: 10 / $sc + rem;
    box-sizing: border-box;
    img {
      width: 20 / $sc + rem;
      height: 20 / $sc + rem;
    }
  }
}
.screenli3 {
  li {
    // float: left;
    width: 50%;
    color: #333;
    display: inline-block;
    border: 0;
    margin-right: 0;
    text-align: left;
    img {
      width: 15 / $sc + rem;
      height: 15 / $sc + rem;
      vertical-align: middle;
      margin: -2 / $sc + rem 5 / $sc + rem 0 0;
    }
  }
}
.btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  span {
    display: inline-block;
    width: 49%;
    font-size: 16 / $sc + rem;
    color: #333;
    line-height: 50 / $sc + rem;
    text-align: center;
    background: #ffffff;
  }
  span:nth-of-type(2) {
    background-color: #ffd161;
  }
}
.zhp {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 20;
  ul {
    li {
      text-align: left;
      position: relative;
      height: 42 / $sc + rem;
      line-height: 42 / $sc + rem;
      padding-left: 15 / $sc + rem;
      font-size: 14 / $sc + rem;
      color: #333;
      &::after {
        content: " ";
        width: 100%;
        height: 1 / $sc + rem;
        background: #e4e4e4;

        transform-origin: 0 0;

        transform: scaleY(0.5);
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
}

.busbody {
  width: 100%;
  li {
    padding: 0 10 / $sc + rem;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-decoration: none;
    box-sizing: border-box;
    margin-bottom: 25 / $sc + rem;
    margin-top: 10 / $sc + rem;
    position: relative;
    width: 100%;
    .bodyimg {
      display: inline-block;
      width: 76 / $sc + rem;
      height: 57 / $sc + rem;
      position: relative;
      box-sizing: border-box;
      margin-right: 8 / $sc + rem;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      border-radius: 2 / $sc + rem;
      overflow: hidden;
      img:nth-of-type(1) {
        width: 100%;
      }
      img:nth-of-type(2) {
        position: absolute;
        width: 26 / $sc + rem;
        right: 0;
        top: 0;
        z-index: 1;
      }
    }
    .bodymain {
      flex: 1 0;
      min-width: 0;

      .shopName {
        font-size: 16 / $sc + rem;
        color: #333;
        line-height: 1.4;
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
      }
      .main1 {
        width: 100%;
        margin-top: 4 / $sc + rem;
        display: flex;
        .start {
          i {
            background: url(../assets/start.png) no-repeat;
            width: 12 / $sc + rem;
            height: 12 / $sc + rem;
            float: left;
            background-position: 40% 5.66%;
            background-size: 126% 379%;
          }
          span {
            margin-left: 4 / $sc + rem;
          }
        }
        .time {
          flex: 1;

          text-align: right;
          span:nth-of-type(2) {
            &::before {
              content: "";
              display: inline-block;
              margin: 0 3 / $sc + rem;
              height: 6 / $sc + rem;
              width: 1 / $sc + rem;
              background: #ccc;
            }
          }
        }
      }
      .songcan {
        margin-top: 4 / $sc + rem;
      }
      .zhekou {
        p {
          align-items: center;
          margin-top: 8 / $sc + rem;
          display: flex;
          position: relative;
          img {
            width: 15 / $sc + rem;
            height: 15 / $sc + rem;
            margin-right: 5 / $sc + rem;
          }
          span {
            line-height: 1.4;
            font-size: 11 / $sc + rem;
            color: #666;
          }
        }
      }
    }
  }
}

.zkjt {
  background: url(../assets/sjt.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 10 / $sc + rem;
  height: 10 / $sc + rem;
  position: absolute;
  top: 8 / $sc + rem;
  right: 0;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.zkpd {
  transform: rotate(0deg);
}

.heixin {
  background-position: 40% 96.226% !important;
}
</style>


