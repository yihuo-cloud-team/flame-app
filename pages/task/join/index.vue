<template>
  <div id="join">
    <div class="trends-box" v-if="list.length > 0">
      <div class="trends-list">
        <task-card
          v-for="(item,index) in list"
          :key="index"
          :item="item"
          @click="go(`/pages/task/info/index?task_id=${item.id}`)"
        ></task-card>
      </div>
      <div class="btn-text" v-if="finished">没有更多了</div>
    </div>
    <div class="empty" v-if="list.length < 1 && finished">
      <div class="empty-img">
        <image class="img" src="../../../static/image/empty-image-default.png" />
      </div>
      <p class="empty__description">无任务,快去联系发布者获取任务吧</p>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>