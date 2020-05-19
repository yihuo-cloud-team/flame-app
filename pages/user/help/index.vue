<template>
  <div id="help">
	<list>
	    <cell v-for="(item,index) in list" :key="index" class='cell' @click="go(`/pages/paper/info/index?id=${item.id}`)">
	      <text>{{item.title}}</text>
		  <text class="lg text-gray cuIcon-right"></text>
	    </cell>
	  </list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>