<template>
  <view id="info">
    <view class="head">
      <view class="user-info">
        <view class="img-box">
          <image
            class="user-img"
            src="https://pic2.zhimg.com/50/v2-be54dda1c19aaeab4f90bcb699057d03_hd.jpg"
          />
        </view>
        <view class="user-name">罗永浩</view>
      </view>
    </view>
    <view class="body">
      <uni-list>
        <uni-list-item title="用户信息" @click="go('/pages/user/userInfo/index')"></uni-list-item>
        <uni-list-item title="发布任务"></uni-list-item>
        <uni-list-item title="我的发布"></uni-list-item>
        <uni-list-item title="我申请的任务"></uni-list-item>
        <uni-list-item title="我接到的任务"></uni-list-item>
        <uni-list-item title="平台行业排行榜"></uni-list-item>
        <uni-list-item title="我的提现"></uni-list-item>
        <uni-list-item title="活动"></uni-list-item>
        <uni-list-item title="投诉与建议"></uni-list-item>
        <uni-list-item title="帮助说明"></uni-list-item>
        <uni-list-item title="退出登录"></uni-list-item>
      </uni-list>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>