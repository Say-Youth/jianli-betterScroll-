<template>
  <transition name="fade">
      音乐
    <div class="music" autoplay="autoplay" @click="fn" ref="myMuiseBtn">
      <audio loop="loop" autoplay="autoplay" ref="myMuise">
        <source src="./music.mp3" type="audio/mpeg">
      </audio>
    </div>
  </transition>
</template>

<script>
export default {
  name: "music",
  data() {
    return {};
  },
  methods: {
    fn() {
      if (this.play) {
        this.$refs.myMuise.pause();
        this.$refs.myMuiseBtn.style = "animation-play-state:paused;";
      } else {
        this.$refs.myMuise.play();
        this.$refs.myMuiseBtn.style = "";
      }
      this.play = !this.play;
    }
  }
};
</script>

<style scoped>
.music{
  position: absolute;
  right: 0.3rem;
  top: 0.4rem;
  z-index: 200;
  width: 0.6rem;
  height: 0.6rem;
  background: url(./ziyuan.png) no-repeat;
  background-size: contain;
}
.fade-enter{
  -webkit-transform: rotate(0deg);
}
.fade-leave-to{
  -webkit-transform: rotate(360deg);
}
.fade-enter-active,
.fade-leave-active{
  transition: -webkit-transform 2s linear infinite;
}
</style>