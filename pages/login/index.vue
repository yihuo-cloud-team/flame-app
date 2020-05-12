<template>
	<div id="login">
		<view id="box">
			 <button type="primary" @click="wxLogin">微信登入</button>
		</view>
		{{jsonData}}
		<uni-popup id="popup" ref="popup" type="center">
			<view class="popup">
				{{msg}}
			</view>
		</uni-popup>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import 'index.scss';
</style>
