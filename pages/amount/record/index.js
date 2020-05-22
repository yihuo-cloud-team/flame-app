export default {
  name: 'record',
  layout: "sub",
  data() {
    return {
      form: {
        type: "",
        page: 1,
        page_size: 15,
        times: [new Date().Format('yyyy-MM-dd'), new Date().Format('yyyy-MM-dd')],
      },
      list: [
      ],
      finished: false,
      typeClass: [{
        name: '全部',
        id: ""
      },
      {
        name: '收入',
        id: 1
      },
      {
        name: '支出',
        id: 2
      }
      ],
      typeIndex: 0
    };
  },
  onLoad: function (option) {
    this.form.type = option.type;
  },
  methods: {
    // 用于初始化一些数据
    init() {
      if (this.form.type) {
        this.form.type = 2
      }
      this.updata();
    },
    // 用于更新一些数据
    async updata() {
      try {
        this.loading = true;
        const res = await this.$http('/budget/list', this.form);
        if (res.code > 0) {
          this.list = [...this.list, ...res.data];
          this.form.page++
          this.loading = false;
          if (res.total < this.form.page_size) {
            this.finished = true;
          }
        } else {
          this.finished = true;
        }
        uni.stopPullDownRefresh();
      } catch (error) {

      }
    },
    typeChoice(e) {
      this.typeIndex = e.detail.value
      this.form.type = this.typeClass[e.detail.value].id
      this.resetupdata()

    },
    start(e) {
      this.$set(this.form.times, 0, e.detail.value)
      this.resetupdata()
    },
    end(e) {
      this.$set(this.form.times, 1, e.detail.value)
      this.resetupdata()
    },
    onReachBottom() {
      this.updata();
    },
    resetupdata() {
      this.list = [];
      this.form.page = 1;
      this.updata();
    },
    onPullDownRefresh() {
      this.resetupdata()
    },

  },
  // 计算属性
  computed: {},
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
  beforeDestroy() { },
  //Vue 实例销毁后调用。
  destroyed() { },
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() { },
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {

  },
  // 组件列表
  components: {},
};
