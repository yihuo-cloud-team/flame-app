<template>
  <div id="search">
    <div class="search-box">
      <div class="icon" @click="openCity">
        {{district}}
        <!-- <van-icon name="location" size="20" /> -->
      </div>
      <simple-address
        type="bottom"
        ref="simpleAddress"
        :pickerValueDefault="cityindex"
        @onConfirm="choiceCity"
        themeColor="#4289db"
      ></simple-address>
      <view class="input-box">
        <input
          type="text"
          v-model="query.search"
          class="input"
          @confirm="resetupdata"
          :placeholder="info.value"
        />
      </view>
      <div class="btn" @click="resetupdata">搜索</div>
    </div>
    <div class="state">
      <div class="state-box">
        <div
          class="type-state"
          @click="go(`/pages/search/indexes/index?key=type&id=${type.id}`)"
        >{{type.name}}</div>
        <div
          class="task-state"
          @click="go(`/pages/search/indexes/index?key=state&id=${state.id}`)"
        >{{state.name}}</div>
      </div>

      <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="query.task_type" :options="option1" @change="search" />
        <van-dropdown-item v-model="query.task_state" :options="option2" @change="search" />
      </van-dropdown-menu>-->
    </div>
    <div class="trends-box">
      <div class="trends-list erect" v-if="list.length > 0">
        <div
          class="item"
          @click="go(`/pages/task/info/index?task_id=${item.id}`)"
          v-for="(item,index) in list"
          :key="index"
          :title="item"
        >
          <div class="panel">
            <div class="box-img">
              <div class="img" :style="`background-image: url(${$getUrl(item.img)});`"></div>
            </div>
            <div class="panel-body">
              <div class="title-box">
                <div class="title">{{item.task_name}}</div>
                <div class="state">
                  <view class="cu-tag line-orange tag" v-if="item.task_state==0">招募中</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==2">开发中</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==4">完成</view>
                  <view class="cu-tag line-orange tag" v-if="item.task_state==5">待确认</view>
                  <!-- <van-tag plain type="success" size="medium" v-if="item.task_state==0">招募中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==2">进行中</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==3">中止</van-tag>
                  <van-tag plain type="success" size="medium" v-if="item.task_state==4">完成</van-tag>-->
                </div>
              </div>
              <div class="text">
                <div class="money">￥{{item.price}}</div>
              </div>
              <div class="subtitle">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-text" v-if="finished">没有更多了</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>