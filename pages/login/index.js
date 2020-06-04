export default {
	name: 'login',
	data() {
		return {
			userInfo: {},
			msg: '',
			checked: false,
			isShow: false,
			cid: '',
		};
	},
	methods: {
		// 用于初始化一些数据
		init() {
			this.update();
		},
		// 用于更新一些数据
		async update() {
			// const res = await this.$http('', {});
		},
		async submit() { },
		async wxLogin() {
			var _this = this;
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					console.log(loginRes.authResult);
					uni.getUserInfo({
						provider: 'weixin',
						success: async function (infoRes) {
							console.log(infoRes)
							_this.userInfo = _this.$twoJsonMerge(loginRes.authResult, infoRes)
							let userInfo = infoRes.userInfo;
							this.cid = plus.push.getClientInfo().clientid;//客户端标识
							userInfo.cid = this.cid;
							const res = await _this.$http('/auth/app_wx_login', userInfo);
							if (res.code >= 1) {
								uni.setStorageSync('jwt', res.jwt);
								uni.setStorageSync('cid', this.cid);
								uni.setStorageSync('userInfo', JSON.stringify(res.data));
								uni.reLaunch({
									url: '/pages/home/index',
								});
							} else {
								_this.errPopup(_this.msg);
							}
						},
						fail: function (error) {
							console.log(error.errMsg);
							_this.errPopup(error.errMsg);
						}
					});
				},
				fail: function (error) {
					console.log(error.errMsg);
					_this.errPopup(error.errMsg);
				}
			});
		},
		goAgreement() {
			uni.navigateTo({
				url: '/pages/agreement/index',
			});
		},
		errPopup(msg) {
			this.msg = msg;
			this.$refs.popup.open();
		}
	},
	// 计算属性
	computed: {
		jsonData: function (json) {
			return JSON.stringify(this.userInfo)
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
		// 页面加载时触发  
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
