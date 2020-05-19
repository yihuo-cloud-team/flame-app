<template>
  <view id="info">
    <view class="title">{{info.title}}</view>
    <view class="time">{{info.add_time}}</view>
    <view class="paper-content" v-html="info.content"></view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>