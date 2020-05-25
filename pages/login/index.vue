<template>
  <view id="login">
    <div class="head-box">
      <img src="~/static/image/logo.jpg" class="logo" alt />
      <view class="title">欢迎登陆益火TKI</view>
    </div>

    <view class="mod-list">
      <div class="mod-item" @click="wxLogin()">
        <uni-icons color="#fff" type="weixin" size="30"></uni-icons>
      </div>
      <!-- <div class="mod-item" @click="go('/pages/login/telLogin/index')">
        <uni-icons color="#fff" type="phone" size="30"></uni-icons>
      </div> -->
    </view>

    <view class="checked-box">
      登陆即代表同意：
      <text @click="goAgreement" class="ment">《益火TKI网服务协议》</text>
    </view>

    <!-- <button :disabled="!checked" type="warn" class="bottom-button" >微信登陆</button> -->
    <!-- <button
      :disabled="!checked"
      type="warn"
      class="bottom-button"
    >登陆</button>-->
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
