export default {
  name: 'enroll',
  layout: 'sub',
  data() {
    return {
      form: {
        task_id: '',
        display: 0,
        text: '',
        phone: ''
      },
      error: false,
      userinfo: null
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      let res = await this.$http('/user/save_info', {});
      if (res.code > 0) {
        this.userinfo = res.data
        this.form.phone = res.data.phone;
      }
    },
    async submit() {
      if (this.form.text == '') {
        uni.showToast({
          title: '请简述原因',
          icon: 'none'
        })
        return false
      }
      if (this.form.phone == '') {
        uni.showToast({
          title: '请输入联系方式',
          icon: 'none'
        })
        this.error = true
        return false
      }
      const res = await this.$http('/task/apply', this.form);
      this.userinfo.phone = this.form.phone
      const res1 = await this.$http('/user/save', this.userinfo);
      if (res.code > 0) {
        uni.showToast({
          title: '操作成功',
          icon: 'none'
        })
        setTimeout(() => {
          uni.navigateBack({
            delta: 1
          })
        }, 500);
      } else {
        uni.showToast({
          title: res.msg,
          icon: 'none'
        })
      }

    },
    Switch() {
      this.form.display = this.form.display == 1 ? 0 : 1
    }
  },
  onLoad(res) {
    if (res.id) {
      this.form.task_id = res.id
    }
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
    this.init();
    this.$nextTick(() => { });
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
  watch: {},
  // 组件列表
  components: {},
};
