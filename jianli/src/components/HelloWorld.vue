<template>
  <div ref="wrapper" class="list-wrapper">
    <ul class="list-content" ref="content">
      <li class="list-item" v-for="(item,index) in htmlList" :key="index">
        <oneC v-if="item=='onePage'" ref="son"></oneC>
        <twoC v-if="item=='twoPage'" ref="son"></twoC>
        <threeC v-if="item=='threePage'" ref="son"></threeC>
        <fourC v-if="item=='fourPage'" ref="son"></fourC>
        <fiveC v-if="item=='fivePage'" ref="son"></fiveC>
      </li>
    </ul>
  </div>
</template>

<script>
import myMusic from "./music/music";
import BScroll from "better-scroll";
import oneC from "../views/one/oneCurtain";
import twoC from "../views/two/twoCurtain";
import threeC from "../views/three/threeCurtain";
import fourC from "../views/four/fourCurtain";
import fiveC from "../views/five/fiveCurtain";
export default {
  name: "HelloWorld",
  data() {
    return {
      htmlList: ["onePage", "twoPage", "threePage", "fourPage", "fivePage"], //判断显示那一个网页
      newScrollY: 0, //实时坐标
      oldScrollY: 0, //上一个坐标位置
      onePage:0,//新的页数
      tops: [] //每个页面顶部的位置
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._initScrollY();
      // this._initTops();
    });
  },
  methods: {
    //初始化滚动插件 并传递实时坐标
    _initScrollY() {
      this.swrapper = new BScroll(this.$refs.wrapper, {
        click: true, //滑动列表默认是没有点击的，必须加上这个才能出发点击事件
        scrollY: true,
        scrollX: false,
        bounce: false,
        useTransition: true,
        momentum: false,
        snap: {
          loop: true, // 开启循环播放
          stepY: 667, // 每页高度为 100px
          threshold: 0.2, // 滚动距离超过宽度/高度的 30% 时切换图片
          speed: 400 // 切换动画时长 400ms
        }
      });
      //滚动开始前把class类名去掉
      this.swrapper.on("beforeScrollStart",()=>{
        this.$store.commit("removeClass")
      });
      //滚动开始时让class类名加上
      this.swrapper.on("scrollStart",()=>{
        // this.$store.commit("removeClass")
        this.$store.commit("changeClass")
        // console.log(this.swrapper.getCurrentPage().pageY);
      });
      this.swrapper.on("scrollEnd", ({ x, y }) => {
        this.newScrollY = Math.abs(y);
        this.swrapper.getCurrentPage();
        this._initpageY();
        this.isloop(this.tops[0],this.tops[1]);
        // this.$store.commit("changeClass")
      });
      //调试页面  注释掉
        // this.swrapper.goToPage(0,4);
    },
    //判断页面是怎么走的。从而跳过补的一张
    isloop(oldY,newY){
      if(oldY == 0 && newY == 4){
        // this.swrapper.goToPage(0,5);
        this.swrapper.goToPage(0,4);
        // this.swrapper.prev()
      }else if(oldY == 4 && newY == 5){
        this.swrapper.goToPage(0,0);
      }
    },
    //保存旧页和新页的索引 给isloop传参用
    _initpageY(){
      this.tops[0] = 0;
      if(!this.onePage){
        this.tops.push(this.swrapper.getCurrentPage().pageY);
      }else{
        this.tops.push(this.swrapper.getCurrentPage().pageY);
        this.tops.shift();
      }
      ++this.onePage;
    }
    //获取每个页面初始的距离保存在数组  方便后续做处理（滑动部分的时候移动整个页面）
    // _initTops() {
    //   var tops = [];
    //   let top = 0;
    //   tops[0] = 0;
    //   var lis = this.$refs.content.children;
    //   //由于返回的格式是HTMLCollection的，所以用call方法将该数组复制一遍
    //   lis = Array.prototype.slice.call(lis);
    //   lis.forEach((li, index) => {
    //     top = top + li.clientHeight;
    //     tops.push(top);
    //   });
    //   this.tops = tops;
    //   console.log(tops);
    // }
    //判断页面所处的位置  在鼠标松开后 判断上一页还是下一页
    
  },
  components: {
    myMusic,
    oneC,
    twoC,
    threeC,
    fourC,
    fiveC
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrapper {
  height: 667px;
  overflow: hidden;
}
.list-item{
  height: 667px;
}
</style>
