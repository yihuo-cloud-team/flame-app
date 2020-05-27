<template>
  <view id="room">
    <view class="card" v-for="item in list" :key="item.id" @click="goRoom(item.room_id)">
      <view class="left">
        <image radius="5" class="head_img" :src="$getUrl(item.userInfo.head_img)" />
        <view class="no" v-if="getNoCount(item.room_id)>0">{{getNoCount(item.room_id)}}</view>
      </view>
      <view class="center">
        <view class="title">{{item.userInfo.name}}</view>
        <view class="content">
          <text v-if="item.lastContent">
            <text v-if="item.lastContent.msg_type==1">{{item.lastContent.msg}}</text>
            <text v-if="item.lastContent.msg_type==2">图片</text>
          </text>
        </view>
      </view>
      <view class="right">
        <view class="time" v-if="item.lastContent">{{item.lastContent.add_time | timeToRe}}</view>
        <view class="time" v-else>{{' '}}</view>
      </view>
    </view>
    <view v-if="total==0">
      <van-empty description="您还没有消息" />
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>