<template>
  <view id="userInfo">
    <swiper class="album" :indicator-dots="false" autoplay>
      <swiper-item v-for="(item,index) in album" :key="index" @click="see(index)">
        <image class="img" mode="aspectFill" :src="item" />
      </swiper-item>
    </swiper>
    <view class="info">
      <view class="user-img">
        <image
          src="http://img1.imgtn.bdimg.com/it/u=2537929852,1205531337&fm=26&gp=0.jpg"
          class="img"
        />
      </view>
      <view class="user-info">
        <view class="name">惠普</view>
        <view class="tag" :style="{'backgroundColor' : 'rgb(222, 147, 243)'}">天蝎座</view>
      </view>
      <view class="edit">
        <view class="edit-body" @click="go('/pages/user/hobby/index')">
          编辑资料
          <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
        </view>
      </view>
    </view>
    <view class="tag-box">
      <view class="tag" :style="{'backgroundColor' : 'rgb(222, 147, 243)'}">天蝎座</view>
      <view class="tag" :style="{'backgroundColor' : 'rgb(222, 147, 243)'}">天蝎座</view>
      <view class="tag" :style="{'backgroundColor' : 'rgb(222, 147, 243)'}">天蝎座</view>
      <view class="tag" :style="{'backgroundColor' : 'rgb(222, 147, 243)'}">天蝎座</view>
    </view>
    <view class="basics">
      <view class="title">
        基本信息
        <view class="edit-body">
          编辑资料
          <uni-icons type="arrowright" size="14" color="#666"></uni-icons>
        </view>
      </view>
      <view class="body">
        <view class="gender">性别：男生</view>
        <view class="phone">联系方式：18903030403</view>
        <view class="birthday">出生日期：1950年01月1日</view>
        <view class="skill">专业技能：e t</view>
      </view>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>