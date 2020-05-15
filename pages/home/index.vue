
<template>
  <view class="container">
    <image :src="$getUrl(src)" />
    <button @click="upload">upload</button>
    <view class="cu-tag bg-red">默认</view>
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

<style>
image {
  width: 80%;
  height: 300px;
  display: block;
  margin: 15px auto;
  background-color: #dddddd;
}
</style>
