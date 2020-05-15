<template>
  <view id="hobby">
    <view class="head">
      <view class="title">我的相册</view>
      <view class="row">
        <view class="col" v-for="(item,index) in userInfo.img_list" :key="index">
          <view class="img-box" :style="{'backgroundImage':`url(${$getUrl(item)})`}">
            <view class="delete" @click="delImg(index)">
              <uni-icons type="trash" color="#fff" size="18"></uni-icons>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="star" @click="starShow = true">
      <view class="title">我的星座</view>
      <view v-if="!userInfo.constellation" class="no-star">未选择星座,请选择</view>
      <view
        class="tag"
        v-else
        :style="{'backgroundColor' : 'rgb(222, 147, 243)'}"
      >{{userInfo.constellation}}</view>
    </view>
    <view class="hobby-body">
      <view class="title">我的爱好</view>
      <view class="tab-box">
        <view
          class="tag"
          v-for="(item,index) in userInfo.like_list"
          :key="index"
          :style="{'backgroundColor' : item.color}"
        >
          {{item.text}}
          <uni-icons type="closeempty" color="#fff" @click="close(index)" size="14"></uni-icons>
        </view>
        <!-- <van-tag color="#666" style="margin-bottom: 10px;" plain @click="show = true">
          <van-icon name="plus" size="16" />
        </van-tag>-->
        <!-- <van-popup v-model="show" position="bottom">
          <van-field v-model="hobby" placeholder="请输入您的爱好" />
          <van-button type="primary" @click="addHobby" block>确认添加</van-button>
        </van-popup>-->
      </view>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>