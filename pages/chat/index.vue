<template>
	<view id="msg">
		<view class="msg-list-panel" ref="msgBox">
			<view class="text-center" style="padding:10px">
				<!-- <loading size="24px" v-if="loadingOld">加载中...</loading> -->
				<view class="cu-load" v-if="loadingOld" :class="loadingOld ? 'loading' : 'over'"></view>
			</view>
			<view class="msg-card" v-for="item in list" :key="item.id">
				<view class="msg-card-body right" v-if="item.user_id == user_id">
					<view class="message-box">
						<view class="user-title">{{ item.userInfo.name }}</view>
						<view class="content-box" v-if="item.msg_type == 1">{{ item.msg }}</view>
						<view class="content-box image" v-if="item.msg_type == 2"><image radius="5" :src="$getUrl(item.msg)"></image></view>
					</view>
					<view class="user-info-box">
						<view class="user-head"><image class="head_img" :src="$getUrl(item.userInfo.head_img)" /></view>
					</view>
				</view>
				<view class="msg-card-body left" v-if="item.user_id != user_id">
					<view class="user-info-box">
						<view class="user-head"><image class="head_img" :src="$getUrl(item.userInfo.head_img)" /></view>
					</view>
					<view class="message-box">
						<view class="user-title">{{ item.userInfo.name }}</view>
						<view class="content-box" v-if="item.msg_type == 1">{{ item.msg }}</view>
						<view class="content-box image" v-if="item.msg_type == 2"><image radius="5" :src="$getUrl(item.msg)"></image></view>
					</view>
				</view>
			</view>
		</view>
		<view class="tool-panel">
			<view class="input-box"><input type="text" v-model="msg" /></view>
			<view class="btn-box">
				<button size="normal" :disabled="isSendLoading" v-if="msg.length > 0" round @click="sendText">发送</button>
				<button size="normal" :disabled="isSendLoading" round @click="chooseImage">
					<text class="lg text-gray cuIcon-cameraadd"></text>
				</button>
				<!-- <sunui-upimg :disabled="isSendLoading" class="update-btn" upload_img_wh='46' v-if="msg.length == 0" @change="sendImage" :upload_auto="true" :upload_count='1'></sunui-upimg> -->
			</view>
		</view>
	</view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import 'index.scss';
</style>
