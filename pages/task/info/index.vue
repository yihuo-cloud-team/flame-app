<template>
  <view id="info">
    <view id="head">
      <view id="headInfo">
        <view class="title-box">
          <view class="title">{{ info.task_name }}</view>
          <view class="state">
            <!-- <template v-if="info.task_state == 1">
              <view class="padding-xs">
                <view class="cu-tag" :class="'line-green'">待支付</view>
              </view>
            </template>
            <template v-else>
              <template v-if="info.state == 0">
                <view class="padding-xs">
                  <view class="cu-tag" :class="'line-green'">等待审核</view>
                </view>
              </template>
              <template v-if="info.state == 2">
                <view class="padding-xs" v-if="info.task_state == item">
                  <view class="cu-tag" :class="'line-green'">审核失败</view>
                </view>
              </template>
            </template>-->
            <view class="padding-xs" v-if="info.task_state == 1">
              <view class="cu-tag line-green">待支付</view>
            </view>
            <view class="padding-xs" v-if="info.task_state == 2">
              <view class="cu-tag line-green" v-if="info.is_join == 1">已申请</view>
              <view class="cu-tag line-green" v-else>招募中</view>
            </view>
            <view class="padding-xs" v-if="info.task_state == 3">
              <view class="cu-tag line-green" v-if="info.is_join == 2">未被选中</view>
              <view class="cu-tag line-green" v-else>进行中</view>
            </view>
            <view class="padding-xs" v-if="info.task_state == 4">
              <view v-if="info.is_pay">
                <view
                  class="cu-tag line-green"
                  v-if="userInfo.id == info.join_user || userInfo.id == info.user_id "
                >已打款</view>
              </view>
              <view class="cu-tag line-green" v-else>完成</view>
            </view>
            <view class="padding-xs" v-if="info.task_state == 5">
              <view class="cu-tag line-green">申诉中</view>
            </view>
          </view>
        </view>
        <view class="num">
          <view class="left">NO.{{ info.task_num }}</view>
          <view class="type">{{ info.class_name }}</view>
        </view>
        <view class="cost">周期 {{ info.cycle }} 天 | 金额 ￥{{ info.price }}</view>
        <view class="partake">
          <view class="number">报名人数：{{ info.join_num }}</view>
          <view
            class="fabulous"
            @tap="state = !state"
            :style="[{ color: state ? 'rgba(65, 135, 219, 1)' : '' }]"
          ></view>
        </view>
        <!-- <view v-if="info.state == 2">
          <view style="color:red;font-size:14px;margin-top:10px">驳回原因：{{ info.remarks }}</view>
        </view>-->
      </view>
    </view>
    <view id="IssuerInfo" class="body" style="margin-bottom:10px;">
      <view class="title" style="margin-bottom: 15px;">发布者信息</view>
      <view class="user-contact">
        <image
          :src="$getUrl(info.head_img)"
          class="img"
          mode="widthFix"
          @tap="go(`/pages/user/userInfo/index?id=${info.user_id}`)"
        />
        <view class="contact">
          <view class="phone">{{ info.name }}</view>
        </view>
      </view>
    </view>

    <view id="taskInfo">
      <view class="body">
        <view class="title" style="margin-bottom: 6px;">发布日期：</view>
        <view class="text">{{ info.add_time }}</view>
      </view>
      <view class="body">
        <view class="title" style="margin-bottom: 6px;">地址：</view>
        <view class="text">{{ info.address }}</view>
      </view>
      <view class="body">
        <view class="title" style="margin-bottom: 6px;">联系方式</view>
        <view class="text">{{ info.contact }}</view>
      </view>
      <view class="body">
        <view class="title" style="margin-bottom: 6px;">任务信息</view>
        <view class="text" style="padding-bottom: 10px;">{{ info.info }}</view>
      </view>
    </view>

    <view class="enlist-body" v-if="info.is_owner == 1">
      <view class="title">申请列表</view>
      <view class="enlist-list">
        <view class="item" v-for="(item, index) in list" :key="index" name>
          <view class="head">
            <img
              class="img"
              @tap="go(`/pages/user/userInfo/index?id=${item.user_id}`)"
              :src="item.display == 1 ? img : $getUrl(item.head_img)"
              alt
            />
            <view class="info">
              <view class="name">{{ item.display == 1 ? item.user_id : item.name }}</view>
              <view class="time">{{ item.add_time }}报名</view>
              <view v-if="item.display == 0">
                <view class="enlist-label">性别：</view>
                <text>{{ item.gender | sex }}</text>
              </view>
              <view>
                <view class="enlist-label">联系方式：</view>
                <text>{{ item.phone ? item.phone : '--' }}</text>
              </view>
              <view v-if="item.display == 0">
                <view class="enlist-label">出生日期：</view>
                <text>{{ item.birthday ? item.birthday : '--' }}</text>
              </view>
              <view v-if="item.display == 0">
                <view class="enlist-label">专业技能：</view>
                <text>{{ item.skill ? item.skill : '--' }}</text>
              </view>
              <view class="text">{{ item.text }}</view>
            </view>
            <view class="btn-box">
              <template v-if="info.is_up == 1">
                <template v-if="info.task_state == 2">
                  <view class="btn" v-if="!info.join_user" @tap="select(item.user_id)">选他</view>
                </template>
              </template>
              <template v-if="item.is_chose">
                <view>开发者</view>
              </template>
            </view>
          </view>
        </view>
      </view>
      <view
        class="solid-bottom text-sm padding"
        style="text-align: center;"
        v-if="list.length <= 0"
      >
        <text class="text-grey">暂无申请人...</text>
      </view>
    </view>
    <view class="footer">
      <template v-if="info.is_owner == 1">
        <view v-if="info.task_state == 1" class="btn">立即支付</view>
        <view v-if="info.task_state == 3" class="btn" @click="complete">项目完成</view>
        <view v-if="info.join_user">
          <view v-if="info.task_state == 4 && info.is_pay == 0" class="btn" @click="payment">立即打款</view>
        </view>
        <view v-if="info.task_state != 1">
          <view
            v-if="info.task_state != 5"
            @click="go(`/pages/task/appeal/index?id=${info.id}`)"
            :class="['btn','danger', {'danger-disabled' : info.task_state == 5}]"
          >{{info.task_state | dangerText}}</view>
          <view
            v-else
            :class="['btn','danger', {'danger-disabled' : info.task_state == 5}]"
          >{{info.task_state | dangerText}}</view>
        </view>
      </template>
      <template v-if="info.is_owner==0">
        <template v-if="info.task_state==2">
          <view
            v-if="info.is_join==0"
            class="btn"
            @click="go(`/pages/enroll/index?id=${info.id}`)"
          >参与项目</view>
        </template>
      </template>
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>
