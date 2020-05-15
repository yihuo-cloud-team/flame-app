<template>
	<view id="login">
	    <view class="text">欢迎登录益火TKI</view>
		<view class="flexCC">
			<label class="radio">
				<view @click="checked=!checked" >
					<radio :checked="checked"/>
					请先仔细阅读
				</view>
			</label>
			<text @click="goAgreement" class="ment">《益火TKI网服务协议》</text>
		</view>
		
		<button :disabled="!checked" type="warn" class="bottom-button" @click="wxLogin()">微信登入</button>
		
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
