<template>
  <view id="apply">
    <view class="trends-box" v-if="list.length > 0">
      <view class="trends-list">
        <task-card
          v-for="(item,index) in list"
          :key="index"
          :item="item"
          @click="go(`/pages/task/info/index?task_id=${item.id}`)"
        ></task-card>
      </view>
      <view class="btn-text" v-if="finished">没有更多了</view>
    </view>
    <div class="empty" v-if="list.length < 1 && finished">
      <div class="empty-img">
        <image class="img" src="../../../static/image/empty-image-default.png" />
      </div>
      <p class="empty__description">没有已申请的任务，快去申请吧</p>
    </div>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>