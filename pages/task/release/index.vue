<template>
  <view id="release">
    <view class="trends-box" v-if="list.length > 0">
      <view class="trends-list">
        <task-card
          v-for="(item,index) in list"
          :key="index"
          :item="item"
          @click="go(`/pages/task/info/index?task_id=${item.id}`)"
          operate-mode
          @operate="onOperate"
        ></task-card>
      </view>
      <view class="btn-text" v-if="finished">没有更多了</view>
      <view :class="['cu-modal','bottom-modal',{'show' : show }]">
        <view class="cu-dialog">
          <view class="btn-list">
            <view class="btn" @click="push">{{OperateItem.is_up?'下架':'上架'}}</view>
            <!-- <view class="btn">删除</view> -->
            <view class="btn" @click="show=false">取消</view>
          </view>
        </view>
      </view>
    </view>
    <div class="empty" v-if="list.length < 1 && finished">
      <div class="empty-img">
        <image class="img" src="../../../static/image/empty-image-default.png" />
      </div>
      <p class="empty__description">无发布任务，快去发布任务吧</p>
    </div>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>