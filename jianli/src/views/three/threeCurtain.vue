<template>
  <div class="page">
    <div class="top">
      <div class="topIcon" :class="style.topIcon"></div>
    </div>
    <!-- 第三幕 -->
    <div class="mainbody">
      <img class="blackWord" src="./two.png" alt>
      <img class="white" src="../../assets/bai.png" alt>
      <img class="purpleWord" src="./twoSize.png" alt>
      <div class="line"></div>
      <div class="threeLeft" :class="style.threeLeft">
        <div>
          <div class="threeSize">2016.9-2019.6</div>
          <div class="threeSize">石家庄职业技术学院</div>
        </div>
        <div style="margin-top: 85px;">
          <div class="threeSize">2018.11-2019.5</div>
          <div class="threeSize">河北墨霖贸易有限公司</div>
        </div>
      </div>
      <div class="threeSx">
        <img class="threeSxY" :class="style.ball" src="./yuanqiu.png" alt="圆球">
        <img
          class="threeSxY"
          :class="style.ball"
          style="top: 140px;"
          src="./yuanqiu.png"
          alt="圆球"
        >
      </div>
      <div class="threeRight" :class="style.threeRight">
        <div>
          <span>1.在学期间学过HTML、CSS、jQuery、JAVA、MySQL</span>
          <div>2.曾担任电竞社社长，并组织多次活动</div>
        </div>
        <div style="margin-top: 45px;">
          <span>1.运用HTML与css编写对网页进行排版布局和样式以及动画优化；</span>
          <div>2. 运用原生js、jQuery、vue全家桶、css3实现网页特效；</div>
          <span>3. 运用前端框架配合主管完成相关项目的开发；</span>
        </div>
      </div>
    </div>
    <div class="botton animated infinite slideOutUp"></div>
  </div>
</template>

<script>
export default {
  computed: {
    style() {
      return this.$store.state.styleList[2];
    }
  }
};
</script>

<style scoped>
.page {
  top: -20px;
}
.mainbody .threeLeft {
  position: absolute;
  top: 85px;
  left: 32px;
  width: 100px;
}
.mainbody .threeLeft .threeSize {
  width: 100%;
  height: 25px;
  background: #000000;
  text-align: center;
  line-height: 25px;
  color: #ffffff;
  font-size: 10px;
  margin-top: 5px;
}
.mainbody .threeSx {
  width: 1.5px;
  height: 385px;
  position: absolute;
  top: 85px;
  left: 150px;
  background: url(./shuxian.png) no-repeat;
  background-size: 100% 100%;
}
.mainbody .threeSx .threeSxY {
  position: absolute;
  left: -6.5px;
  margin-top: 15px;
}
.mainbody .threeRight {
  position: absolute;
  top: 85px;
  left: 182px;
  width: 112.5px;
  color: #505050;
  font-size: 12px;
}
</style>