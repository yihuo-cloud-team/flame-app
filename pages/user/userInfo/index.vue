<template>
  <view id="userInfo">
    <swiper class="album" :indicator-dots="false" autoplay>
      <swiper-item v-for="(item,index) in album" :key="index" @click="see(index)">
        <image class="img" mode="aspectFill" :src="item" />
      </swiper-item>
    </swiper>
    <view class="info">
     <view class="user-img">
       <image src="https://pic2.zhimg.com/50/v2-be54dda1c19aaeab4f90bcb699057d03_hd.jpg" class="img"></image>
     </view>
     <view class="user-info">
       <view class="name">惠普</view>
       <uni-tag size="small" class="tag" text="天蝎座"></uni-tag>
     </view>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>