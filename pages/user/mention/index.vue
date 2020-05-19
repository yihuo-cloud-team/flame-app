<template>
  <view id="mention">
	  <view id="textarea-box">
		  <textarea v-model="message" rows="3" id="inp" style="" maxlength="300" auto-height placeholder="为了提高 益火TKI 产品服务质量，如果您在使用 益火TKI 相关产品服务得不到满意解答或是有好的建议，欢迎您提交给我们，我们将严肃的对待每个客户的投诉或是建议！" />
	  </view>
	
    <view class="btn" @click="submit">
      提交
    </view>
  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>