<template>
	<view id="telLogin">
	    <view id="tel-box">
			<view id="input-box">
				<input type="tel" placeholder="手机号">
			</view>
			<button class="btn" type="warn" @click="getCode()">获取验证码</button>
		</view>
		
		<button type="primary">立刻绑定</button>
		
		
		<uni-popup id="popup" ref="popup" type="center">
			<view class="popup">
				{{msg}}
			</view>
		</uni-popup>
		
		
	  </view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import 'index.scss';
</style>
