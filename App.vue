<script>
import Vue from "vue";

export default {
  onLaunch: function() {
    // uni.clearStorageSync();
    if (!uni.getStorageSync("jwt")) {
      uni.reLaunch({
        url: "/pages/login/index"
      });
    }
    const _handlePush = function(message) {
      // TODO
      uni.navigateTo({
        url: message.payload.pagePath
      });
    };
    plus.push.addEventListener("click", _handlePush);
    plus.push.addEventListener("receive", _handlePush);
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url("/static/uni.ttf");
}
/* #endif */
@import "colorui/main.css";
@import "colorui/icon.css";
</style>
