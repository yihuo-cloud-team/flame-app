<template>
  <div id="deposit">
    <div class="card">
      <div class="head">
        <div class="money">
          <div class="icon">￥</div>
          <div class="number">{{price}}</div>
        </div>
      </div>
      <div class="body">
        <div class="pay-title">支付方式</div>
        <radio-group class="block" @change="RadioChange">
          <view class="cu-form-group">
            <view class="title">
              <img class="img" src="~/static/image/wx.png" alt />微信支付
            </view>
            <view>
              <radio
                class="blue radio"
                :class="paymode=='WX'?'checked':''"
                :checked="paymode=='WX'?true:false"
                value="WX"
              ></radio>
            </view>
          </view>
        </radio-group>
      </div>
    </div>
    <div class="footer">
      <div class="btn">确认托管</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>