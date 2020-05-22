<template>
  <view id="record">
    <!-- <view class="date">
      <view class="left" @click="showPopup">
        <view class="footer-left">开始时间</view>
        <view
          class="footer-right"
          style="background-color:#AAC4FD"
        >{{currentDate.Format('yyyy-MM')}}</view>
      </view>
      <van-popup v-model="show" position="bottom" :style="{height:'200px'}">
        <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          :formatter="formatter"
          @confirm="start"
          @cancel="show=false"
        />
      </van-popup>
      <view class="left">
        <view>全部</view>
        <van-dropdown-menu>
          <van-dropdown-item
            v-model="form.type"
            :disabled="shows"
            @change="select"
            :options="option1"
          />
        </van-dropdown-menu>
      </view>
    </view>-->
    <view class="date">
      <view class="times">
        <view class="title">查询时间</view>
        <view class="start">
          <picker mode="date" @change="start" :value="form.times[0]">{{form.times[0]}}</picker>
        </view>-
        <view class="end">
          <picker mode="date" @change="end" :value="form.times[1]">{{form.times[1]}}</picker>
        </view>
      </view>
      <view class="record-class">
        <picker mode="selector" :range="typeClass" range-key="name" @change="typeChoice" :value="typeIndex">
          {{typeClass[typeIndex].name}}
          <uni-icons type="arrowdown" style="margin-left: 5px;" size="14"></uni-icons>
        </picker>
      </view>
    </view>
    <view class="panel-list" v-if="list.length > 0">
      <view class="panel-item" v-for="(item,index) in list" :key="index">
        <view class="top">
          <view class="top-left" v-if="item.type==1">收入</view>
          <view class="top-left" v-if="item.type==2">支出</view>
          <view class="top-center" style="color:#4289DB" v-if="item.type==1">+{{item.money}}</view>
          <view class="top-center" v-if="item.type==2">-{{item.money}}</view>
        </view>
        <view class="bottom-box">
          <view class="left">
            <view class="center" v-if="item.state==1">状态:成功</view>
            <view class="center" v-if="item.state==0">状态:待审核</view>
            <view class="center" v-if="item.state==2">状态:失败</view>
            <view class="bottom" v-if="item.text">备注:{{item.text}}</view>
          </view>
          <view class="right">
            <view class="top-right">{{item.add_time}}</view>
          </view>
        </view>
      </view>
      <view class="btn-text" v-if="finished">没有更多记录了</view>
    </view>
    <div class="empty" v-if="list.length < 1 && finished">
      <div class="empty-img">
        <image class="img" src="../../../static/image/empty-image-default.png" />
      </div>
      <p class="empty__description">无记录</p>
    </div>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>