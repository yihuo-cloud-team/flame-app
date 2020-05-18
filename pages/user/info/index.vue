<template>
  <view id="info">
    <view class="head">
      <view class="user-info">
        <view class="img-box">
          <image class="user-img" :src="$getUrl(userInfo.head_img)" />
        </view>
        <view class="user-name">{{userInfo.name}}</view>
      </view>
    </view>
    <view class="body">
      <uni-list>
        <uni-list-item title="用户信息" @click="go('/pages/user/userInfo/index')"></uni-list-item>
        <uni-list-item title="发布任务" @click="go('/pages/task/add/index')"></uni-list-item>
        <uni-list-item title="我的发布" @click="go('/pages/task/release/index')"></uni-list-item>
        <uni-list-item title="我申请的任务" @click="go('/pages/task/apply/index')"></uni-list-item>
        <uni-list-item title="我接到的任务"></uni-list-item>
        <uni-list-item title="平台行业排行榜" @click="go('/pages/user/ranking/index')"></uni-list-item>
        <uni-list-item title="我的提现" @click="go('/pages/amount/cash/index')"></uni-list-item>
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