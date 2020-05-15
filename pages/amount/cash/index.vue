<template>
	<view id="cash">
		<view class="panel">
			<view class="panel-money">
				<view class="left">
					<view class="money-text">余额（元）</view>
					<view class="money-num">{{info.user_money}}</view>
				</view>
				<view class="right">
					<view @click="$router.push('/amount/record')" class="text">收支记录</view>
				</view>
			</view>
			<view class="panel-cash">
				<view class="cash">
					<view class="cash-text">可提现金额（元）</view>
					<view class="cash-num">{{info.user_money}}</view>
				</view>
				<view class="frozen">
					<view class="frozen-text">冻结资金（元）</view>
					<view class="frozen-num">{{info.freeze_money}}</view>
				</view>
			</view>
		</view>
		<view class="tixian">
			<view class="title">提现账户类型</view>
			<!-- <van-radio-group class="checkb" v-model="query.money_type">
	        <van-radio name="1">
	          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">微信</div>
	        </van-radio>
	        <van-radio name="2">
	          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">支付宝</div>
	        </van-radio>
	        <van-radio name="3">
	          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">银行卡</div>
	        </van-radio>
	      </van-radio-group> -->
			<view class="title">卡号<view>
					<!-- <view> -->
					<!-- <van-cell-group>
	        <van-field v-model="query.account" placeholder="微信号、支付宝账号、银行卡账号" />
	      </van-cell-group> -->
			<view class="title">真实姓名</view>
					<!-- <van-cell-group>
	        <van-field v-model="query.real_name" placeholder="请填写真实姓名，以免打款失败" />
	      </van-cell-group> -->
			<view class="title">提现金额</view>
					<!-- <van-cell-group>
	        <van-field v-model="query.money" type="number" placeholder="可提现金额" />
	      </van-cell-group> -->

					
			</view>
				<!-- <van-button @click="submit" color="#4289DB" style="margin-top:20px" block :disabled="disabled">发起提现</van-button> -->
				
			</view>
		</view>
	</view>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
	@import "index.scss";
</style>
