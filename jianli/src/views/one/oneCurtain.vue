<template>
  <div class="page">
    <div class="top">
      <div class="topIcon" :class="style.topIcon"></div>
    </div>
    <div class="mainbody" :class="style.mainbody">
      <div class="TH" :class="style.th">
        <span>求职目标:web前端工程师</span>
        <img class="animated infinite heartBeat" src="./X.png" alt="X">
      </div>
      <div class="MH">
        <div :class="style.mh">求职简历</div>
        <img :class="style.mhImg" src="./MH.png" alt>
      </div>
      <div class="BH" :class="style.bh">
        <img class="animated infinite heartBeat" src="./X.png" alt="X">
        <span>这是我的简历 通过这个你会更加了解我</span>
      </div>
    </div>
    <div class="botton animated infinite slideOutUp"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    //属性生成  DOM未生成 $el不存在
    // console.log("created data生成");
  },
  mounted() {
    //模板编译/挂在之后
    // console.log("mounted挂载后");
    // this.show=!this.show;
  },
  updated() {
    //组件更新后
    // console.log("pudated组件更新后");
    // this.show=!this.show;
  },
  beforeDestroy(){
      // console.log("beforeDestroy销毁前")
  },
  destroyed(){
      // console.log("destroyed销毁后")
  },
  methods:{
  },
  computed:{
    style(){
      return this.$store.state.styleList[0]
    },
  }
};
</script>

<style scoped>
.TH{
  margin-top: 50px;
  text-align: center;
  font-size: 16px;
  background-color: initial;
  color: #000000;
}
.TH img{
  margin-top: 10px;
}
.TH span {
  display: block;
}
.MH{
    background-color: initial;
    color: #000000;
    font-size: 30px;
    letter-spacing: 0.25em;
    vertical-align: baseline;
    text-align: center;
    margin-top: 90px;
}
.BH {
  width: 100%;
  background-color: initial;
  font-size: 12px;
  color: #111111;
  text-align: center;
  position: absolute;
  bottom: 15px;
}
.BH span{
  display: block;
}
</style>