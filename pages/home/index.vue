
<template>
  <view class="container">
    <view class="search-box" @click="go('/pages/search/index')">
      <icon type="search" size="14" />
      <div class="input">
        <input type="text" disabled placeholder="欢迎搜索更多任务" />
      </div>
    </view>
    <!--  -->
    <ol-icon-nav class="icon-nav" @fnc="routers" :list="classList"></ol-icon-nav>

    <view class="title">项目动态</view>

    <view class="r-card-list">
      <view
        class="r-card"
        v-for="(item,index) in moveList"
        :key="index"
        @click="go(`/pages/task/info/index?task_id=${item.id}`)"
      >
        <image mode="aspectFill" :src="$getUrl(item.img)" />
        <view class="info-box">
          <view class="task-title">{{item.task_name}}</view>
          <view class="price-box">
            <text class="price">¥{{item.price}}</text>
            <view class="cu-tag line-orange tag" v-if="item.task_state==0">招募中</view>
            <view class="cu-tag line-orange tag" v-if="item.task_state==2">开发中</view>
            <view class="cu-tag line-orange tag" v-if="item.task_state==4">完成</view>
            <view class="cu-tag line-orange tag" v-if="item.task_state==5">待确认</view>
          </view>
          <view class="time">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</view>
        </view>
      </view>
    </view>

    <view class="title">任务列表</view>

    <view class="card-list">
      <task-card></task-card>
      <view
        class="card"
        v-for="(item,index) in list"
        @click="go(`/pages/task/info/index?task_id=${item.id}`)"
        :key="index"
      >
        <image mode="aspectFill" :src="$getUrl(item.img)" />
        <view class="center">
          <view class="task-title">{{item.task_name}}</view>
          <view class="price">¥{{item.price}}</view>
          <view class="time">{{$handleTime(item.add_time)}} | {{item.join_num}}人报名</view>
        </view>
        <view class="right">
          <view class="cu-tag line-orange tag" v-if="item.task_state==0">招募中</view>
          <view class="cu-tag line-orange tag" v-if="item.task_state==2">开发中</view>
          <view class="cu-tag line-orange tag" v-if="item.task_state==4">完成</view>
        </view>
      </view>
    </view>
    <div class="btn-text" v-if="finished">没有更多了</div>

    <!--  -->
    <!-- <view class="cu-tag bg-red">默认</view> -->
  </view>
</template>

<script>
import OlIconNav from "@/components/OlIconNav/OlIconNav.vue";
import TaskCard from "@/components/TaskCard/TaskCard.vue";
import Upload from "../../plugins/Upload";
export default {
  data() {
    return {
      src: "",
      query: {
        page: 1,
        page_size: 10
      },
      list: [],
      moveList: [],
      classList: [],
      finished: false
    };
  },
  methods: {
    init() {
      this.updata();
      this.http_dynamic();
      this.httpClass();
    },
    async upload() {
      const file = await Upload.select();
      const res = await Upload.send(file);
      this.src = res.data.url;
    },
    async updata() {
      const res = await this.$http("/task/list", this.query);
      if (res.code > 0) {
        this.list = [...this.list, ...res.data];
        this.query.page++;
        if (res.total < this.query.page_size) {
          this.finished = true;
        }
      } else {
        this.finished = true;
      }
      uni.stopPullDownRefresh();
    },
    async http_dynamic() {
      const res = await this.$http("/task/move/list", {
        page: 1,
        page_size: 3
      });
      if (res.code >= 0) {
        this.moveList = res.data;
      }
    },
    async httpClass() {
      const res = await this.$http("/class/list");
      if (res.code >= 0) {
        this.classList = res.data;
      }
    },
    go(url) {
      uni.navigateTo({
        url: url
      });
    },
    routers(data) {
      console.warn(data);

      // this.$router.push(`/task/add?type=${data.id}`);
      this.go(`/pages/task/add/index?type=${data.id}`);
    }
  },
  components: { OlIconNav, TaskCard },
  onReachBottom() {
    this.updata();
  },
  onPullDownRefresh() {
    this.list = [];
    this.query.page = 1;
    this.updata();
  },
  mounted() {
    this.init();
    this.$nextTick(() => {});
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  padding: 15px 10px;
}
.tag {
  color: #07c160;
  // border-radius: 4px;
  &:after {
    border-radius: 8px;
  }
}
.search-box {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .input {
    padding: 10px;
    font-size: 16px;
  }
}
.icon-nav {
  margin-bottom: 15px;
}

.r-card-list {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 10px;
  .r-card {
    border-radius: 5px;
    min-width: 45%;
    max-width: 45%;
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
  .card:nth-last-child(1) {
    border: none;
  }
  .card {
    display: flex;
    // align-items: center;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 10px;
    padding-bottom: 10px;
    image {
      display: block;
      max-width: 150px;
      min-width: 150px;
      max-height: 100px;
      min-height: 100px;
      background-color: #dddddd;
      border-radius: 5px;
    }
    .center {
      margin-left: 10px;
      overflow: hidden;
      margin-right: 10px;
      padding-top: 10px;
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
      flex: 1;
      padding-top: 8px;
      text-align: right;
    }
  }
}
.btn-text {
  text-align: center;
  margin: 16px 0;
  color: #969799;
  font-size: 14px;
  line-height: 24px;
  border: 0 solid #ebedf0;
}
</style>

