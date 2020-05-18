<template>
  <div class="ol-icon-nav">
    <swiper class="my-swipe" indicator-dots indicator-active-color="#FED363" indicator-color="#fff">
      <swiper-item
        v-for="(item,i) in showList"
        :key="i"
        :class="list.length>=10?'paddingBottom30':''"
      >
        <uni-grid :highlight="false" :showBorder="false" :column="5">
          <template v-for="(todo,n) in item">
            <uni-grid-item :key="n">
              <div class="item" @click="tiaozhuang(todo)">
                <div class="img-box">
                  <image class="img" :src="$getUrl(todo.icon)" />
                </div>
                <div class="title">{{todo.name}}</div>
              </div>
            </uni-grid-item>
          </template>
        </uni-grid>
      </swiper-item>
    </swiper>
  </div>
</template>
<script src="./OlIconNav.js"></script>
<style lang="scss" scoped>
@import "OlIconNav.scss";
</style>