<template>
  <view id="telLogin">
    <div class="head-box">
      <img src="/static/image/logo.jpg" class="logo" alt />
      <view class="title">欢迎登陆益火TKI</view>
    </div>
    <div class="form-box">
      <view class="input-box">
        <input type="tel" v-model="phone" placeholder="手机号" />
      </view>
      <view class="input-box" style="margin-bottom: 20rpx;">
        <input type="text" v-model="code" placeholder="验证码" />
        <button class="btn" @click="getCode()" :disabled="isplay">{{btnText}}</button>
      </view>
      <button type="primary" class="block" @tap="submit()">登陆</button>
      <div class="return-box">
        <span class="return-text" @click="back()">返回</span>
      </div>
    </div>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
