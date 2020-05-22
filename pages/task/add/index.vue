<template>
  <div id="add">
    <div class="card upload-card">
      <div class="head">
        <div class="upload">
          <div class="img-box" @click="upload">
            <image mode="aspectFill" class="task-img" v-if="form.img" :src="$getUrl(form.img)" />
            <span class="title" v-else>点击配置任务图片</span>
          </div>
          <div class="default-text" @click="change">
            <span>使用默认图片</span>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="form-box">
          <input type="text" maxlength="30" v-model="form.task_name" placeholder="30字符以内" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <view class="title">任务类别</view>
      </div>
      <div class="body">
        <div class="option">
          <div
            v-for="(item,i) in classList"
            :key="i"
            :class="['item',{'activ': form.task_type == item.id}]"
            @click="form.task_type= item.id"
          >
            <div class="info">
              <img class="icon" :src="$getUrl(item.icon)" alt />
              <div>{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <view class="title">任务价格</view>
      </div>
      <div class="body">
        <div class="price-list" v-if="priceList">
          <div class="item" @click="price(todo)" v-for="(todo,i) in priceList" :key="i">
            <div class="info">{{todo}}￥</div>
          </div>
          <!-- <uni-tag class="tag" @click="price(todo)" v-for="(todo,i) in priceList" :key='i' :text="todo+''" type="danger" size="small" inverted></uni-tag> -->
        </div>
        <div class="input">
          <input maxlength="30" type="number" v-model.number="form.price" placeholder="请输入任务价格" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <div class="title">任务周期(天)</div>
      </div>
      <div class="body">
        <div class="input">
          <input maxlength="30" type="number" v-model.number="form.cycle" placeholder="请输入任务周期(天)" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <div class="title">任务信息</div>
      </div>
      <div class="body">
        <div class="input">
          <textarea
            style="padding: 10px;"
            v-model="form.info"
            maxlength="300"
            placeholder="请尽量详细描述您的项目，以吸引更多人报名"
            show-word-limit
          />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <div class="title">所在地</div>
      </div>
      <div class="body">
        <div :class="['input',{'activ':form.p}]" @click="openCity">{{form.p?arealabel:'省市区选择'}}</div>
        <simple-address
          ref="simpleAddress"
          :pickerValueDefault="areaList"
          @onConfirm="onConfirm"
          themeColor="#4289db"
        ></simple-address>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <div class="title">详细地址</div>
      </div>
      <div class="body">
        <div class="input">
          <input maxlength="10" v-model="form.address" placeholder="10字符以内" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="head">
        <div class="title">
          联系方式
          <span style="font-size:14px">(手机/微信/QQ等)</span>
        </div>
      </div>
      <div class="body">
        <div class="input">
          <input v-model="form.contact" placeholder="手机、微信、QQ等" />
        </div>
      </div>
    </div>
    <div class="btn" @click="submit">下一步：托管资金</div>

    <!-- <van-popup v-model="show" position="bottom">
	      <van-area :area-list="areaList" value="110101" @cancel="show = !show" @confirm="select" />
    </van-popup>-->
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "index.scss";
</style>
