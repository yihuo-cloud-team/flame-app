<template>
  <div id="indexes">
    <uni-list v-if="key == 'type'">
      <uni-list-item
        v-for="(item,index) in list"
        :key="index"
        :showArrow="false"
        @click="submit(item)"
      >
        <template v-slot:default>
          <div class="title">
            <img class="img" v-if="item.id" :src="$getUrl(item.icon)" mode="widthFix" />
            <div>{{item.name}}</div>
          </div>
        </template>
        <template v-slot:right>
          <div class="select" v-if="task_type === item.id">
            <uni-icons color="#fff" type="checkmarkempty" size="18"></uni-icons>
          </div>
        </template>
      </uni-list-item>
    </uni-list>
    <uni-list v-if="key == 'state'">
      <uni-list-item
        v-for="(item,index) in state_list"
        :key="index"
        :showArrow="false"
        @click="submit(item)"
      >
        <template v-slot:default>
          <div class="title">
            <div>{{item.name}}</div>
          </div>
        </template>
        <template v-slot:right>
          <div class="select" v-if="task_state === item.id">
            <uni-icons color="#fff" type="checkmarkempty" size="18"></uni-icons>
          </div>
        </template>
      </uni-list-item>
    </uni-list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>