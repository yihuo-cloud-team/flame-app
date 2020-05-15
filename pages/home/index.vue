
<template>
  <view class="container">
    <view class="search-box">
      <icon type="search" size="14" />
      <input type="text" disabled placeholder="欢迎搜索更多任务" />
    </view>
    <!--  -->

    <view class="title">项目动态</view>

    <view class="r-card-list">
      <view class="r-card" v-for="i in 10" :key="i">
        <image :src="$getUrl(src)" />
        <view class="info-box">
          <view class="task-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</view>
          <view class="price-box">
            <text class="price">¥50.99</text>
            <view class="cu-tag bg-red sm">招募中</view>
          </view>
          <view class="time">100分钟前|99人报名</view>
        </view>
      </view>
    </view>

    <view class="title">任务列表</view>

    <view class="card-list">
      <view class="card" v-for="i in 10" :key="i">
        <image :src="$getUrl(src)" />
        <view class="center">
          <view class="task-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</view>
          <view class="price">¥50.99</view>
          <view class="time">100分钟前|99人报名</view>
        </view>
        <view class="right">
          <view class="cu-tag bg-red sm">招募中</view>
        </view>
      </view>
    </view>

    <!--  -->
    <!-- <view class="cu-tag bg-red">默认</view> -->
  </view>
</template>

<script>
import Upload from "../../plugins/Upload";
export default {
  data() {
    return {
      src: ""
    };
  },
  methods: {
    async upload() {
      const file = await Upload.select();
      const res = await Upload.send(file);
      this.src = res.data.url;
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  padding: 15px 10px;
}
.search-box {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  input {
    padding: 20px 10px;
    line-height: 1;
    font-size: 16px;
  }
}

.r-card-list {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 10px;
  .r-card {
    border-radius: 5px;
    min-width: 40%;
    max-width: 40%;
    display: block;
    overflow: hidden;
    background-color: #ffffff;
    margin-right: 10px;
    image {
      display: block;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      background-color: #dddddd;
    }
    .info-box {
      padding: 10px;
      .task-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        color: #333;
        line-height: 1;
        margin-bottom: 10px;
      }
      .price-box {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        .price {
          color: #f00;
          flex: 1;
        }
      }
      .time {
        font-size: 11px;
        color: #666;
      }
    }
  }
}

.card-list {
  padding: 10px;
  background-origin: 5px;
  background-color: #ffffff;
  .card {
    display: flex;
    align-items: center;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 10px;
    padding-bottom: 10px;
    image {
      display: block;
      width: 150px;
      max-height: 80px;
      min-height: 80px;
      background-color: #dddddd;
    }
    .center {
      margin-left: 10px;
      overflow: hidden;
      margin-right: 10px;
      .task-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        color: #333;
        line-height: 1;
        margin-bottom: 10px;
      }
      .price {
        color: #f00;
        margin-bottom: 5px;
      }
      .time {
        font-size: 11px;
        color: #666;
      }
    }
    .right {
    }
  }
}
</style>

