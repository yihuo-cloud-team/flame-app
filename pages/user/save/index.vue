<template>
  <view id="save">
    <view class="head">
      <view class="head-img" v-if="form.head_img" @click="uploader">
        <image class="img" :src="$getUrl(form.head_img)" />
      </view>
      <view class="img-none" v-else @click="uploader">
        <view class="uploader">
          <uni-icons class="icons" type="camera" size="30" color="#fff"></uni-icons>
        </view>
      </view>
    </view>
    <view class="user-info">
      <view class="title-f">基本信息</view>
      <view>
        <form>
          <view class="cu-form-group">
            <view class="title">昵称</view>
            <input placeholder="请输入您的昵称" v-model="form.name" name="input" />
            <view class="cu-capsule radius">
              <switch
                @change="Switch('name_show')"
                :class="form.name_show?'checked':''"
                :checked="form.name_show?true:false"
              ></switch>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">联系方式</view>
            <input placeholder="请输入联系方式" v-model="form.phone" name="input" />
          </view>
          <view class="cu-form-group">
            <view class="title">生日</view>
            <picker
              mode="date"
              :value="form.birthday"
              start="1950-09-01"
              end="2025-09-01"
              @change="DateChange"
            >
              <view
                :class="['placeholder' , { 'color' : form.birthday }]"
              >{{form.birthday?form.birthday:'请选择您的生日'}}</view>
            </picker>
            <view class="cu-capsule radius">
              <switch
                @change="Switch('birthday_show')"
                :class="form.birthday_show?'checked':''"
                :checked="form.birthday_show?true:false"
              ></switch>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">性别</view>
            <view class="radio-box">
              <radio-group @change="RadioChange">
                <radio
                  class="blue radio"
                  :class="form.gender==1?'checked':''"
                  :checked="form.gender==1?true:false"
                  value="1"
                >男生</radio>
                <radio
                  class="blue radio"
                  :class="form.gender==0?'checked':''"
                  :checked="form.gender==0?true:false"
                  value="0"
                >女士</radio>
              </radio-group>
            </view>
            <view class="cu-capsule radius">
              <switch
                @change="Switch('gender_show')"
                :class="form.gender_show?'checked':''"
                :checked="form.gender_show?true:false"
              ></switch>
            </view>
          </view>
          <view class="cu-form-group">
            <view class="title">专业技能</view>
            <input placeholder="请输入专业技能" v-model="form.skill" name="input" />
            <view class="cu-capsule radius">
              <switch
                @change="Switch('skill_show')"
                :class="form.skill_show?'checked':''"
                :checked="form.skill_show?true:false"
              ></switch>
            </view>
          </view>
          <view class="footbtn">
            <button form-type="submit" @click="Submit" class="btn" type="primary">保存</button>
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