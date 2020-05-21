<template>
  <div id="join">
    <div class="trends-box" v-if="list.length > 0">
      <div class="trends-list erect">
        <div
          class="item"
          @click="go(`/pages/task/info/index?task_id=${item.id}`)"
          v-for="item in list"
          :key="item"
          :title="item"
        >
          <div class="panel">
            <div class="box-img">
              <div class="img" :style="`background-image: url(${$getUrl(item.img)});`"></div>
            </div>
            <div class="panel-body">
              <div class="title-box">
                <div class="title">{{item.task_name}}</div>
                <div class="state">
                  <view class="cu-tag line-orange tag" v-if="item.task_state==0">招募中</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==2">进行中</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==3">中止</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==4">完成</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==5">待验收</view>
                </div>
              </div>
              <div class="text">
                <div class="money">￥{{item.price}}</div>
              </div>
              <div class="subtitle">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-text" v-if="finished">没有更多了</div>
    </div>
    <div class="empty" v-if="list.length < 1 && finished">
      <div class="empty-img">
        <image class="img" src="../../../static/image/empty-image-default.png" />
      </div>
      <p class="empty__description">无任务,快去联系发布者获取任务吧</p>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>