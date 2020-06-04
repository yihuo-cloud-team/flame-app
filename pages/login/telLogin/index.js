export default {
	name: 'telLogin',
	data() {
		return {
			userInfo: {},
			checked: false,
			isShow: false,
			phone: '',
			code: '',
			timer: null,
			timerNum: 60,
			isplay: false,
		};
	},
	methods: {
		// 用于初始化一些数据
		init() {
			this.update();
		},
		initTimer() {
			this.timerNum = 60;
			this.isplay = false;
			this.timer = null;
		},
		// 用于更新一些数据
		async update() {
			// const res = await this.$http('', {});
		},
		async submit() {
			const res = await this.$http('/auth/app_login', {
				phone: this.phone,
				code: this.code,
				cid:plus.push.getClientInfo().clientid,
			});
			if (res.code >= 1) {
				uni.setStorageSync('jwt', res.jwt);
				uni.setStorageSync('userInfo', JSON.stringify(res.data));
				if (res.data.name) {
					uni.reLaunch({
						url: '/pages/home/index',
					});
					return
				}
				uni.reLaunch({
					url: '/pages/login/save/index',
				});
			} else {
				uni.showModal({
					title: '提示',
					content: '验证失败'
				})
			}
		},
		async getCode() {
			//获取验证码
			const res = await this.$http('/auth/get_code', {
				phone: this.phone
			});
			console.log(res)
			if (res.code >= 1) {
				this.isplay = true;
				this.timer = setInterval(() => {
					this.timerNum--
					if (this.timerNum < 0) {
						this.initTimer();
					}
				}, 1000);
				uni.showToast({
					title: '发送成功',
					icon: 'none'
				});
			} else {
				uni.showModal({
					title: '提示',
					content: '已超出发送次数，请稍后再试'
				})
			}
		},
		back() {
			uni.navigateBack();
		}
	},
	// 计算属性
	computed: {
		btnText: function () {
			if (this.isplay) {
				return this.timerNum + 's'
			}
			return '获取验证码'
		}
	},
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
