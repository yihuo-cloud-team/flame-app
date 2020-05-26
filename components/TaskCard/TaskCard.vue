<template>
  <div class="TaskCard" @click="go">
    <div class="head">
      <div class="img-box">
        <image mode="aspectFill" class="img" :src="$getUrl(item.img)" alt />
      </div>
    </div>
    <div class="body">
      <div class="task-title">{{item.task_name}}</div>
      <div class="task-price">
        <span class="symbol">￥</span>
        {{item.price}}
      </div>
      <div class="task-info">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</div>
    </div>
    <div class="footer">
      <view class="cu-tag line-orange tag" v-if="item.task_state==2">招募中</view>
      <view class="cu-tag line-orange tag" v-if="item.task_state==3">进行中</view>
      <view class="cu-tag line-orange tag" v-if="item.task_state==4">完成</view>
      <view class="cu-tag line-orange tag" v-if="item.task_state==5">申诉中</view>
      <view class="operate" v-if="OperateMode" @click.stop="operate">
        <uni-icons type="more-filled" size="22"></uni-icons>
      </view>
    </div>
  </div>
</template>
<script src="./TaskCard.js"></script>
<style lang="scss" scoped>
@import "TaskCard.scss";
</style>