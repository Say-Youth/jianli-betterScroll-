<template>
  <div class="page">
    <div class="top">
      <div class="topIcon" :class="style.topIcon"></div>
    </div>
    <!-- 第二幕 -->
    <div class="mainbody" :class="style.mainbody">
      <img class="blackWord" src="./one.png" alt>
      <img class="purpleWord" src="./zimu.png" alt>
      <img class="white" src="../../assets/bai.png" alt>
      <div class="line"></div>
      <div class="twoTopLeft">
        <img :class="style.twoTopLeftImg" src="./p.jpg" alt>
        <div :class="style.twoTopLeftDiv">张江浩</div>
      </div>
      <div class="twoTopRight" :class="style.twoTopRight">
        <span>年龄:22</span>
        <div>专业:计算机应用技术</div>
        <span>学历：大专</span>
        <div>工作经验:一年以内</div>
        <span>住处:北京昌平</span>
        <div>工作状态:求职中</div>
      </div>
      <div class="twoSize" :class="style.twoSize">
        有良好的编程思维,应对bug有足够的耐心;
        <br>有良好的自主学习与理解能力,对其他未知的新技术有学习欲望;
        <br>对计算机有非常浓厚的兴趣,希望在这方面有突出的表现;
        <br>有良好的沟通表达能力,能快速融入团队;
      </div>
    </div>
    <div class="botton animated infinite slideOutUp"></div>
  </div>
</template>

<script>
export default {
  computed: {
    style() {
      return this.$store.state.styleList[1];
    }
  }
};
</script>

<style scoped>
.mainbody .twoTopLeft {
  position: absolute;
  top: 85px;
  left: 32px;
}
.mainbody .twoTopLeft img {
  height: 125px;
  width: 125px;
}
.mainbody .twoTopLeft div {
  text-align: center;
  font-size: 20px;
}
.mainbody .twoTopRight {
  position: absolute;
  top: 85px;
  left: 182px;
  font-size: 15px;
}
.mainbody .twoSize {
  position: absolute;
  left: 32px;
  width: 255px;
  height: 25px;
  font-size: 16px;
  top: 260px;
}
</style>