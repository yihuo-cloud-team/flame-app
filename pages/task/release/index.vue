<template>
  <view id="release">
    <view class="trends-box" v-if="this.list.length > 0">
      <view class="trends-list erect">
        <view
          class="item"
          @click="go(`/pages/task/info/index?task_id=${item.id}`)"
          v-for="(item,index) in list"
          :key="index"
          :title="item"
        >
          <view class="panel">
            <view class="box-img">
              <view class="img" :style="`background-image: url(${$getUrl(item.img)});`"></view>
            </view>
            <view class="panel-body">
              <view class="title-box">
                <view class="title">{{item.task_name}}</view>
                <view class="state">
                  <template v-if="item.task_state==1">
                    <view class="cu-tag line-orange tag">待支付</view>
                  </template>
                  <template v-else>
                    <template v-if="item.state==0">
                      <view class="cu-tag line-orange tag">等待审核</view>
                    </template>
                    <template v-if="item.state==1">
                      <template v-if="item.is_up==0">
                        <view class="cu-tag line-orange tag">已下架</view>
                      </template>
                      <template v-if="item.is_up==1">
                        <view class="cu-tag line-orange tag" v-if="item.task_state==0">招募中</view>
                        <view class="cu-tag line-orange tag" v-if="item.task_state==2">进行中</view>
                        <view class="cu-tag line-orange tag" v-if="item.task_state==3">中止</view>
                        <view class="cu-tag line-orange tag" v-if="item.task_state==4">完成</view>
                        <view class="cu-tag line-orange tag" v-if="item.task_state==5">待验收</view>
                        <view class="cu-tag line-orange tag" v-if="item.task_state==6">失败</view>
                      </template>
                    </template>
                    <template v-if="item.state==2">
                      <view class="cu-tag line-orange tag">审核失败</view>
                    </template>
                  </template>
                </view>
              </view>
              <view class="text">
                <view class="money">￥{{item.price}}</view>
              </view>
              <view class="subtitle">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</view>
              <template v-if="item.state==2">
                <view style="color:red;font-size:12px">驳回原因：{{item.remarks}}</view>
              </template>
            </view>
          </view>
        </view>
      </view>
      <view class="btn-text" v-if="finished">没有更多了</view>
    </view>
    <div class="empty" v-if="this.list.length < 1 && finished">
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