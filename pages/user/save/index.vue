<template>
  <view id="save">
    <view class="head">
      <view class="head-img">
        <image
          class="img"
          src="http://pic2.zhimg.com/50/v2-958d33fd4a4de747058adcafdf753074_hd.jpg"
        />
      </view>
    </view>
    <view class="user-info">
      <view class="title-f">基本信息</view>
      <view>
        <form @submit="formSubmit" @reset="formReset">
          <view class="cu-form-group">
            <view class="title">昵称</view>
            <input placeholder="请输入您的昵称" name="input" />
            <view class="cu-capsule radius">
              <switch
                @change="name_Switch = !name_Switch"
                :class="name_Switch?'checked':''"
                :checked="name_Switch?true:false"
              ></switch>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">联系方式</view>
            <input placeholder="请输入联系方式" name="input" />
          </view>
          <view class="cu-form-group">
            <view class="title">日期选择</view>
            <picker
              mode="date"
              :value="date"
              start="2015-09-01"
              end="2025-09-01"
              @change="DateChange"
            >
              <view :class="['placeholder' , { 'color' : date }]">{{date?date:'请选择您的生日'}}</view>
            </picker>
            <view class="cu-capsule radius">
              <switch
                @change="name_Switch = !name_Switch"
                :class="name_Switch?'checked':''"
                :checked="name_Switch?true:false"
              ></switch>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">定义颜色</view>
            <view>
              <radio-group class="block" @change="RadioChange">
                <radio
                  class="blue radio"
                  :class="radio=='C'?'checked':''"
                  :checked="radio=='C'?true:false"
                  value="C"
                >男生</radio>
                <radio
                  class="blue radio"
                  :class="radio=='D'?'checked':''"
                  :checked="radio=='D'?true:false"
                  value="D"
                >女士</radio>
              </radio-group>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">专业技能</view>
            <input placeholder="请输入专业技能" name="input" />
            <view class="cu-capsule radius">
              <switch
                @change="jn_Switch = !jn_Switch"
                :class="jn_Switch?'checked':''"
                :checked="jn_Switch?true:false"
              ></switch>
            </view>
          </view>
        </form>
      </view>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>