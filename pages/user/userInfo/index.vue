<template>
	<view id="userInfo">
		<swiper class="album" :indicator-dots="false" autoplay v-if="userInfo.img_list.length > 0">
			<swiper-item v-for="(item, index) in userInfo.img_list" :key="index" @click="see(index)"><image class="img" mode="aspectFill" :src="$getUrl(item)" /></swiper-item>
		</swiper>
		<view class="info">
			<view class="user-img"><image :src="$getUrl(userInfo.head_img)" class="img" /></view>
			<view class="user-info">
				<view class="name">{{ userInfo.name }}</view>
				<view class="tag" :style="{ backgroundColor: 'rgb(222, 147, 243)' }" v-if="userInfo.constellation">{{ userInfo.constellation }}</view>
			</view>
			<view class="edit">
				<view class="edit-body" @click="go('/pages/user/hobby/index')" v-if="isMe">
					编辑资料
					<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
				</view>
			</view>
		</view>
		<view class="tag-box" v-if="userInfo.like_list.length>0">
			<view class="tag" v-for="(item, index) in userInfo.like_list" :key="index" :style="{ backgroundColor: item.color }">{{ item.text }}</view>
		</view>
		<view class="basics">
			<view class="title">
				基本信息
				<view class="edit-body" @click="go('/pages/user/save/index')" v-if="isMe">
					编辑资料
					<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
				</view>
			</view>
			<view class="body">
				<view class="gender">性别：{{ userInfo.gender == 1 ? '男生' : '女士' }}</view>
				<view class="phone">联系方式：{{ userInfo.phone }}</view>
				<view class="birthday">出生日期：{{ userInfo.birthday }}</view>
				<view class="skill">专业技能：{{ userInfo.skill }}</view>
			</view>
		</view>
	</view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import 'index.scss';
</style>
