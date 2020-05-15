<template>
	<view id="add">
	    <view class="name">
	      <view class="title">任务名称</view>
	      <view class="input">
			  <input type="text" maxlength="30" v-model="form.task_name" placeholder="30字符以内"/>
	        
	      </view>
	    </view>
	
	    <view class="tupian">
	      <view class="title">任务图片</view>
	      <view class="store-image">
	        
			<!-- color: rgba(66, 137, 220, 1)-->
	        <view class="cu-tag line-blue" @click="change">默认图片</view>
	      </view>
	    </view>
	    <view class="task-type">
	      <view class="title">任务类别</view>
	      <view class="option">
	        <view v-for="(item,i) in classList" :key='i' :class="['item',{'activ': form.task_type == item.id}]" @click="form.task_type= item.id">{{item.name}}</view>
	      </view>
	    </view>
	    <view class="price">
	      <view class="title">任务价格</view>
	      <view class="price-box" v-if="priceList">
			<view class="cu-tag bg-red" style="margin:5px;" @click="price(todo)" v-for="(todo,i) in priceList" :key='i'>{{todo}}</view>
	        <!-- <uni-tag class="tag" @click="price(todo)" v-for="(todo,i) in priceList" :key='i' :text="todo+''" type="danger" size="small" inverted></uni-tag> -->
	      </view>
	      <view class="input">
	        <input maxlength="30" type="number" v-model.number="form.price" placeholder="请输入数字" />
	      </view>
	    </view>
	    <view class="address">
	      <view class="title">任务周期(天)</view>
	      <view class="input">
	        <input maxlength="30" type="number" v-model.number="form.cycle" placeholder="请输入数字" />
	      </view>
	    </view>
	    <view class="info">
	      <view class="title">任务信息</view>
	      <view class="input">
	        <textarea
	          style="padding: 10px;"
	          v-model="form.info"
	          maxlength="300"
	          placeholder="请尽量详细描述您的项目，以吸引更多人报名"
	          show-word-limit
	        />
	      </view>
	    </view>
	    <view class="region">
	      <view class="title">所在地</view>
	      <view class="input" v-if="form.p==''" @click="show = !show">省市区选择</view>
	      <view
	        class="input"
	        v-if="form.p!=''"
	        @click="show = !show"
	      >{{form.p | areaToStr}}{{form.c | areaToStr}}{{form.a | areaToStr}}</view>
	    </view>
	    <view class="address">
	      <view class="title">详细地址</view>
	      <view class="input">
	        <input maxlength="10" v-model="form.address" placeholder="10字符以内" />
	      </view>
	    </view>
	    <view class="address">
	      <view class="title">
	        联系方式
	        <span style="font-size:14px">(手机/微信/QQ等)</span>
	      </view>
	      <view class="input">
	        <input v-model="form.contact" placeholder="手机、微信、QQ等" />
	      </view>
	    </view>
	
	    <view class="btn" @click="submit">下一步：托管资金</view>
	    <!-- <van-popup v-model="show" position="bottom">
	      <van-area :area-list="areaList" value="110101" @cancel="show = !show" @confirm="select" />
	    </van-popup> -->
	  </view>
	</view>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
	@import "index.scss";
</style>
