<template>
  <div class="page">
    <div class="top">
      <div class="topIcon" :class="style.topIcon"></div>
    </div>
    <!-- 第五幕 -->
    <div class="five">
      <img :class="style.fiveImg" style="display:block;width:300px;" src="./datu.png" alt>
      <div class="fiveThank">
        <span
          style="color: #ccc;
            background-color: initial;
            font-size: 12px;"
        >我期待一个自我展示的舞台</span>
        <img
          class="animated infinite heartBeat"
          style="display: block;margin: 5px auto;"
          src="../one/X.png"
          alt="X"
        >
        <div style="color: #ccc;font-size: 32px;">THANK YOU</div>
        <img
          class="animated infinite heartBeat"
          style="display: block;margin: 5px auto;"
          src="../one/X.png"
          alt="X"
        >
      </div>
    </div>
    <div class="fiveRB" :class="style.fiveRB">
      <div class="fivePhone">
        <img src="./dianhua.png" style="width:20px;height:20px;" alt>
        <span>15130967336</span>
      </div>
      <div class="fiveEmail">
        <img src="./youjian2.png" style="width:20px;height:20px;" alt>
        <span>a1159887231@qq.com</span>
      </div>
      <div class="fiveWeChat">
        <img src="./weixin.png" style="width:20px;height:20px;" alt>
        <span>15130967336</span>
      </div>
    </div>
    <div class="botton animated infinite slideOutUp"></div>
  </div>
</template>

<script>
export default {
    computed:{
        style(){
            return this.$store.state.styleList[4];
        }
    }
};
</script>

<style scoped>
.page .five {
  z-index: 10;
  width: 300px;
  height: 500px;
  position: absolute;
  top: 70px;
  right: 37.5px;
}
.page .five .fiveThank {
  text-align: center;
}
.page .fiveRB{
    position: absolute;
    bottom: 25px;
    left: 20px;
    color: #ccc;
    font-size: 16px;
}
</style>