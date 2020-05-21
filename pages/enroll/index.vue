<template>
  <div id="enroll">
    <div class="panel">
      <div class="title">简述你能胜任项目的原因（详细的说明能增加你的入选率）</div>
      <textarea
        v-model="form.text"
        style="border: 1px solid rgba(187, 187, 187, 1); width: 100%; padding: 5px;"
        maxlength="300"
        placeholder="10~300个字符，描述可以包含您对项目的理解、过往的相关经验、采用的技术方案等。详细的描述能增加您选中参与项目的机率。"
      />
    </div>
    <view class="cu-form-group">
      <view class="title">是否匿名</view>
      <view class="cu-capsule radius">
        <switch
          @change="Switch"
          :class="form.display?'checked':''"
          :checked="form.display?true:false"
        ></switch>
      </view>
    </view>
    <view class="cu-form-group">
      <view class="title">联系方式</view>
      <input type="number" placeholder="请输入联系方式" v-model="form.phone" name="input" />
    </view>
    <!-- <van-cell-group>
      <van-switch-cell v-model="form.display" :active-value="1" :inactive-value="0" title="是否匿名" />
      <van-field required v-model="form.phone" label="联系方式" :error="error" placeholder="请输入您的联系方式" />
    </van-cell-group>-->
    <div class="btn" @click="submit()">抢单</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>