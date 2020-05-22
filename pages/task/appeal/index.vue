<template>
  <div id="appeal">
    <div class="panel">
      <div class="title">请填写您的申诉理由</div>
      <textarea
        v-model="form.stop_remark"
        style="border: 1px solid rgba(187, 187, 187, 1); width: 100%; padding: 5px;"
        maxlength="300"
        placeholder="10~300个字符，描述可以包含您的申诉理由"
      />
    </div>
    <!-- <view class="cu-form-group">
      <view class="title">是否匿名</view>
      <view class="cu-capsule radius">
        <switch
          @change="Switch"
          :class="form.display?'checked':''"
          :checked="form.display?true:false"
        ></switch>
      </view>
    </view>-->
    <view class="cu-form-group">
      <view class="title">联系方式</view>
      <input type="number" placeholder="请输入联系方式" v-model="phone" name="input" />
    </view>
    <!-- <van-cell-group>
      <van-switch-cell v-model="form.display" :active-value="1" :inactive-value="0" title="是否匿名" />
      <van-field required v-model="form.phone" label="联系方式" :error="error" placeholder="请输入您的联系方式" />
    </van-cell-group>-->
    <div class="btn" @click="submit()">立即申诉</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>