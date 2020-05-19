export default {
  name: 'search',
  layout: 'sub',
  data() {
    return {
      list: [],
      finished: false,
      district: '暂无定位',
      query: {
        search: '',
        page: 1,
        page_size: 10,
        task_type: '',
        task_state: '',
        a: ''
      },
      info: {},
      type: {
        name: "全部分类",
        id: ''
      },
      state: {
        name: "所有进度",
        id: ''
      }
    };
  },
  onShow() {
    if (uni.getStorageSync('task_type')) {
      this.type = JSON.parse(uni.getStorageSync('task_type'))
      this.query.task_type = JSON.parse(uni.getStorageSync('task_type')).id
    }
    if (uni.getStorageSync('task_state')) {
      this.state = JSON.parse(uni.getStorageSync('task_state'))
      this.query.task_state = JSON.parse(uni.getStorageSync('task_state')).id
    }
    this.resetupdata()
  },
  methods: {
    // 用于初始化一些数据
    init() {
      // this.httpClass();
      this.getAddress();
      this.httpConfig();
    },
    async httpConfig() {
      let res = await this.$http('/config/info', {
        key: "searchInfo"
      });
      if (res.code >= 0) {
        this.info = res.data
      }
    },
    // 用于更新一些数据
    async updata() {
      try {
        let res = await this.$http('/task/list', this.query)
        if (res.code > 0) {
          this.list = [...this.list, ...res.data]
          this.query.page++
          if (res.total < 10) {
            this.finished = true;
          }
        } else {
          this.finished = true;
        }
        uni.stopPullDownRefresh();
      } catch (error) { }
    },
    async httpClass() {
      const res = await this.$http.post('/class/list');
      console.log(res)
      if (res.code >= 0) {
        console.log(this.option1)
        res.data.forEach(res => {
          res.text = res.name;
          res.value = res.id;
          delete res["icon"]
        })
        this.option1 = [...this.option1, ...res.data];
        console.log(this.option1)
      }
    },
    getAddress() {
      uni.getLocation({
        type: 'gcj02',
        geocode: true,
        success: (res) => {
          if (res.address) {
            this.district = res.address.city
          }
        }
      })
    },

    confirm(e) {
      this.AreaArr = e;
      this.district = e[2].name;
      this.query.a = e[2].code;
      this.search();
      this.show = false;
    },
    go(url) {
      uni.navigateTo({
        url: url
      });
    },
    onReachBottom() {
      this.updata();
    },
    resetupdata() {
      this.list = [];
      this.query.page = 1;
      this.updata();
    },
    onPullDownRefresh() {
      this.resetupdata()
    },
  },
  // 计算属性
  computed: {

  },
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
  // 在实例创建完成后被立即调用
  created() { },
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() { },
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {

    this.$nextTick(() => {
      this.init();
    });
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() { },
  // keep-alive 组件激活时调用。
  activated() { },
  // keep-alive 组件停用时调用。
  deactivated() { },
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {
    uni.removeStorageSync('task_type');
    uni.removeStorageSync('task_state');
  },
  //Vue 实例销毁后调用。
  destroyed() { },
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() { },
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {},
  // 组件列表
  components: {},
};
