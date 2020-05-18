<template>
  <view id="ranking">
    <!-- <van-tabs @click="select1" title-active-color="#4289DB" color="#4289DB" v-model="active">
      <van-tab title="已完成排行榜"></van-tab>
      <van-tab title="已发布排行榜"></van-tab>
    </van-tabs>-->
    <view class="select">
      <view class="left">
        <span :class="active==0?'span':'span1'" @click="select1">已完成任务排行榜</span>
        <view :class="active==0?'active':'active1'"></view>
      </view>
      <view class="left" style="margin-left:10px">
        <span :class="active==1?'span':'span1'" @click="select2">已发布排行榜</span>
        <view :class="active==1?'active':'active1'"></view>
      </view>
    </view>
    <view class="top">
      <view class="title">{{name}}</view>
      <view class="box">
        <view class="box-flex">
          <view class="box-num" v-show="active==0">{{finish_num.finish_num}}</view>
          <view class="box-num" v-show="active==1">{{publish_num.publish_num}}</view>
          <view class="box-wancheng" v-show="active==0">完成任务数</view>
          <view class="box-wancheng" v-show="active==1">我发布的任务</view>

          <span class="box-ranking" v-show="active==0">No.{{finish_num.rank}}</span>
          <span class="box-ranking" v-show="active==1">No.{{publish_num.rank}}</span>
        </view>
        <view class="box-flex">
          <view class="box-num" v-show="active==0">{{finish_money.finish_money}}</view>
          <view class="box-num" v-show="active==1">{{publish_money.publish_money}}</view>
          <view class="box-wancheng" v-show="active==0">完成任务收入</view>
          <view class="box-wancheng" v-show="active==1">我发布的总金额</view>
          <span class="box-ranking" v-show="active==0">No.{{finish_money.rank}}</span>
          <span class="box-ranking" v-show="active==1">No.{{publish_money.rank}}</span>
        </view>
      </view>
    </view>
    <!-- <van-tabs v-model="active1" @click="select" title-active-color="#4289DB" color="#4289DB">
      <template v-if="active==0">
        <van-tab title="按已完成排序"></van-tab>
        <van-tab title="按总收入排序"></van-tab>
      </template>
      <template v-if="active==1">
        <van-tab title="按发布数量排序"></van-tab>
        <van-tab title="按总金额排序"></van-tab>
      </template>
    </van-tabs>-->
    <view class="select1">
      <view v-if="active==0" @click="select3" class="left">
        <span :class="active1==0?'span':'span1'">按已完成排序</span>
        <view :class="active1==0?'active':'active1 '"></view>
      </view>
      <view class="left" @click="select4" v-if="active==0">
        <span :class="active1==1?'span':'span1'">按总收入排序</span>
        <view :class="active1==1?'active':'active1'"></view>
      </view>

      <view class="left" @click="select3" v-if="active==1">
        <span :class="active1==0?'span':'span1'">按发布数量排序</span>
        <view :class="active1==0?'active':''"></view>
      </view>
      <view class="left" @click="select4" v-if="active==1">
        <span :class="active1==1?'span':'span1'">按总金额排序</span>
        <view :class="active1==1?'active':''"></view>
      </view>
    </view>
    <view class="bottom">
      <view class="list-box">
        <list v-model="loading" :finished="finished" finished-text="没有更多了" @load="update">
          <view class="list">
            <view class="item" v-for="(item,index) in list" :key="index">
              <!-- <view class="left">{{index+1}}</view> -->
              <view class="left" v-if="index==0">
                <img src="~/static/image/1.png" alt />
              </view>
              <view class="left" v-else-if="index==1">
                <img src="~/static/image/2.png" alt />
              </view>
              <view class="left" v-else-if="index==2">
                <img src="~/static/image/3.png" alt />
              </view>
              <view class="left" v-else><i>{{index+1}}</i></view>

              <img class="img" :src="$getUrl(item.head_img)" alt />
              <view class="right">
                <view class="right-top">{{item.name}}</view>
                <view class="right-bottom">
                  <view class="zuo">
                    <view v-show="active==0">完成数:{{item.finish_num}}</view>
                    <view v-show="active==1">发布数:{{item.publish_num}}</view>
                  </view>
                  <view class="you">
                    <view v-show="active==0">总收入:{{item.finish_money}}</view>
                    <view v-show="active==1">总发布额:{{item.publish_money}}</view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </list>
      </view>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>