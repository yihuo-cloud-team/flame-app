export default {
    name: 'save',
    data() {
        return {
            name_Switch: false,
            radio: 'D',
            form: {
            }
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            const res = await this.$http('/user/save_info', {});
            if (res.code > 0) {
                this.form = res.data;
            }
        },
        DateChange(e) {
            this.form.birthday = e.detail.value
        },
        RadioChange(e) {
            this.form.gender = parseInt(e.detail.value)
        },
        Switch(key) {
            this.form[key] = this.form[key] == 1 ? 0 : 1
        },
        async Submit(e) {
            uni.showLoading({
                title: '加载中'
            });
            const res = await this.$http('/user/save', this.form);
            uni.hideLoading();
            if (res.code > 0) {
                uni.showToast({
                    title: "修改成功",
                    icon: "none"
                });
				
				uni.reLaunch({
					url: '/pages/home/index',
				});
            }
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
        this.$nextTick(() => {
			uni.showModal({
			    title: '提示',
			    content: '请认真填写个人信息，以保产品的正常使用。',
			    success: function (res) {
			        if (res.confirm) {
			            console.log('用户点击确定');
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
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
    watch: {},
    // 组件列表
    components: {},
};