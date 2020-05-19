<template>
	<view id="telLogin">
		<view id="tel-box">
			<view class="input-box"><input type="tel" v-model="phone" placeholder="手机号" /></view>
			<button class="btn" type="warn" @click="getCode()" :disabled="isplay">{{btnText}}</button>
		</view>
		<view class="input-box" style="margin-bottom: 20rpx;"><input type="text" v-model="code" placeholder="验证码" /></view>
		<button type="primary" @tap='submit()'>立刻绑定</button>
		<uni-popup id="popup" ref="popup" type="center">
			<view class="popup">{{ msg }}</view>
		</uni-popup>
	</view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import 'index.scss';
</style>
