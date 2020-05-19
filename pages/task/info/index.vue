<template>
	<view id="info">
		<view id="head">
			<view id="headInfo">
				<view class="title-box">
					<view class="title">{{ info.task_name }}</view>
					<view class="state">
						<template v-if="info.task_state == 1">
							<view class="padding-xs"><view class="cu-tag" :class="'line-green'">待支付</view></view>
						</template>
						<template v-else>
							<template v-if="info.state == 0">
								<view class="padding-xs"><view class="cu-tag" :class="'line-green'">等待审核</view></view>
							</template>
							<template v-if="info.state == 1">
								<template v-if="info.is_up == 0">
									<view class="padding-xs"><view class="cu-tag" :class="'line-green'">已下架</view></view>
								</template>
								<template v-if="info.is_up == 1">
									<view v-for="(item, i) in stateList" :key="i">
										<view class="padding-xs" v-if="info.task_state == item.task_state">
											<view class="cu-tag" :class="'line-green'">{{ item.title }}</view>
										</view>
									</view>
								</template>
							</template>
							<template v-if="info.state == 2">
								<view class="padding-xs" v-if="info.task_state == item"><view class="cu-tag" :class="'line-green'">审核失败</view></view>
							</template>
						</template>
					</view>
				</view>
				<view class="num">
					<view class="left">NO.{{ info.task_num }}</view>
					<view class="type">{{ info.class_name }}</view>
				</view>
				<view class="cost">周期 {{ info.cycle }} 天 | 金额 ￥{{ info.price }}</view>
				<view class="partake">
					<view class="number">报名人数：{{ info.join_num }}</view>
					<view class="fabulous" @tap="state = !state" :style="[{ color: state ? 'rgba(65, 135, 219, 1)' : '' }]"></view>
				</view>
				<view v-if="info.state == 2">
					<view style="color:red;font-size:14px;margin-top:10px">驳回原因：{{ info.remarks }}</view>
				</view>
			</view>
		</view>
		<view id="IssuerInfo" class="body" style="margin-bottom:10px;">
			<view class="title" style="margin-bottom: 15px;">发布者信息</view>
			<view class="user-contact">
				<image :src="$getUrl(info.head_img)" class="cu-avatar radius xl" mode="widthFix" @tap="go(`/pages/user/userInfo/index?id=${info.user_id}`)"></image>
				<view class="contact">
					<view class="phone">{{ info.name }}</view>
				</view>
			</view>
		</view>

		<view id="taskInfo">
			<view class="body">
				<view class="title" style="margin-bottom: 6px;">发布日期：</view>
				<view class="text">{{ info.add_time }}</view>
			</view>
			<view class="body">
				<view class="title" style="margin-bottom: 6px;">地址：</view>
				<view class="text">{{ info.address }}</view>
			</view>
			<view class="body">
				<view class="title" style="margin-bottom: 6px;">联系方式</view>
				<view class="text">{{ info.contact }}</view>
			</view>
			<view class="body">
				<view class="title" style="margin-bottom: 6px;">任务信息</view>
				<view class="text" style="padding-bottom: 10px;">{{ info.info }}</view>
			</view>
		</view>

		<view class="enlist-body" v-if="info.is_owner == 1">
			<view class="title">申请列表</view>
			<view class="enlist-list">
				<list style=" width: 100%;" @load="apply">
					<cell class="item" v-for="(item, index) in list" :key="index" name="">
						<view class="head">
							<img class="img" @tap="go(`/pages/user/userInfo/index?id=${item.user_id}`)" :src="item.display == 1 ? img : $getUrl(item.head_img)" alt />
							<view class="info">
								<view class="name">{{ item.display == 1 ? item.user_id : item.name }}</view>
								<view class="time">{{ item.add_time }}报名</view>
								<view v-if="item.display == 0">
									<view class="enlist-label">性别：</view>
									<text>{{ item.gender | sex }}</text>
								</view>
								<view>
									<view class="enlist-label">联系方式：</view>
									<text>{{ item.phone ? item.phone : '--' }}</text>
								</view>
								<view v-if="item.display == 0">
									<view class="enlist-label">出生日期：</view>
									<text>{{ item.birthday ? item.birthday : '--' }}</text>
								</view>
								<view v-if="item.display == 0">
									<view class="enlist-label">专业技能：</view>
									<text>{{ item.skill ? item.skill : '--' }}</text>
								</view>
								<view class="text">{{ item.text }}</view>
							</view>
							<view class="btn-box">
								<template v-if="info.is_up == 1">
									<template>
										<template v-if="info.task_state == 0">
											<view class="btn" v-if="info.join_user == 0" @tap="select(item.user_id)">选他</view>
										</template>
									</template>
								</template>
								<template v-if="info.join_user != 0">
									<view v-if="index == 0">开发者</view>
								</template>
							</view>
						</view>
					</cell>
				</list>
			</view>
			<view class="solid-bottom text-sm padding" style="text-align: center;" v-if="list.length <= 0"><text class="text-grey">暂无申请人...</text></view>
		</view>

		<view class="footer">
			<template v-if="info.is_owner == 1">
				<!-- 审核状态 -->
				<template v-if="info.task_state == 1">
					<button class="border-radius" type="primary" size="large" @tap.stop="`/pages/amount/deposit?task_order=${task_order}&&price=${price}`">
						待支付
					</button>
				</template>
				<template v-else>
					<!-- 支付完成进入待审核状态 -->
					<template v-if="info.state == 0">
						<button class="border-radius" type="primary" size="large" disabled>待审核</button>
					</template>
					<!-- 审核通过 -->
					<template v-if="info.state == 1">
						<!--  任务状态为0 招募中 -->
						<template v-if="info.task_state == 0">
							<template v-if="info.is_up == 0">
								<button class="border-radius" type="primary" size="large" @tap="save1(info)">上架</button>
							</template>
							<template v-if="info.is_up == 0">
								<view class="box">
									<span class="left"></span>
									<span class="right" @tap="go(`/task/refund?id=${info.id}`)">终止任务</span>
								</view>
							</template>
							<template v-if="info.is_up == 1">
								<button class="border-radius" type="primary" size="large" @tap="save2(info)">下架</button>
							</template>
						</template>
						<!--  任务状态为2 进行中-->
						<template v-if="info.task_state == 2">
							<button class="border-radius" type="primary" size="large" disabled>任务进行中</button>
							<view class="box">
								<span class="left"></span>
								<span class="right" @tap="quxiao(info)">终止任务</span>
							</view>
						</template>
						<!--  任务状态为3 任务终止-->
						<template v-if="info.task_state == 3">
							<button class="border-radius" type="primary" size="large" disabled>任务终止</button>
						</template>
						<template v-if="info.task_state == 4">
							<button class="border-radius" type="primary" size="large" disabled>任务完成</button>
						</template>
						<!-- 任务状态为5 完成待确认 -->
						<template v-if="info.task_state == 5">
							<button class="border-radius" type="primary" size="large" @tap="confirm2(info)">确认完成</button>
						</template>
					</template>
					<!-- 审核被驳回 -->
					<template v-if="info.state == 2">
						<button class="border-radius" type="primary" size="large" @tap="go(`/pages/task/edit?id=${info.id}`)">重新编辑</button>
					</template>
				</template>
			</template>

			<!-- 等于0是别人发布的 -->
			<template v-if="info.is_owner == 0">
				<!-- 审核状态 -->
				<template v-if="info.state == 1">
					<!-- 任务状态为0 -->
					<template v-if="info.task_state == 0">
						<template v-if="info.is_up == 0">
							<button class="border-radius" type="primary" size="large" disabled>任务已下架</button>
						</template>
						<template v-if="info.is_up == 1">
							<template v-if="info.is_join == 0">
								<button class="border-radius" type="primary" size="large" @tap="go(`/pages/enroll?id=${info.id}`)">参与项目</button>
							</template>
							<template v-if="info.is_join == 1">
								<button class="border-radius" type="primary" size="large" disabled>已申请</button>
							</template>
						</template>
					</template>
					<template v-if="info.task_state == 2">
						<template v-if="info.is_join == 0">
							<button class="border-radius" type="primary" size="large" disabled>您已错过此次任务</button>
						</template>
						<template v-if="info.is_join == 1">
							<button class="border-radius" type="primary" size="large" disabled>您的申请没有通过</button>
						</template>
						<template v-if="info.is_join == 2">
							<button class="border-radius" type="primary" size="large" @tap="confirm1(info)">确认完成</button>
						</template>
					</template>
					<template v-if="info.task_state == 3">
						<button class="border-radius" type="primary" size="large" disabled>任务中止</button>
					</template>
					<template v-if="info.task_state == 4">
						<button class="border-radius" type="primary" size="large" disabled>任务已完成</button>
					</template>
					<template v-if="info.task_state == 5">
						<button class="border-radius" type="primary" size="large" disabled>已完成待验收</button>
					</template>
				</template>
			</template>
		</view>

		<!-- <view class="fixed">
			<view class="help">
				<view class="help-btn" @tap="go('/pages/user/help/index')">
					<text class="lg cuIcon-question" style="margin-right: 10px;"></text>
					帮助
				</view>
			</view>
		</view> -->
	</view>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import 'index.scss';
</style>
