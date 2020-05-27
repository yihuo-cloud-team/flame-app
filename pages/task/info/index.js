export default {
	name: 'info',
	layout: 'sub',
	data() {
		return {
			state: false,
			list: [],
			finished: false,
			info: {},
			userInfo: {},
			list: [],
			query: {
				page: 1,
				page_size: 10,
				task_id: ''
			},
			img: "https://api.yihuo-cloud.com/public/files/20200326/202003260703295347.jfif",

		}
	},
	onShow() {
		this.update();
	},
	methods: {
		// 用于初始化一些数据
		init() {
			this.http_userinfo()
			this.apply();
		},
		// 用于更新一些数据
		async update() {
			const res = await this.$http('/task/info/ai', {
				task_id: this.query.task_id,
			});
			if (res.code > 0) {
				this.info = res.data;
			}
		},
		async http_userinfo() {
			const res = await this.$http('/user/save_info', {});
			if (res.code > 0) {
				this.userInfo = res.data;
			}
		},
		async apply() {
			const res = await this.$http('/task/applyList', this.query);
			if (res.code > 0) {
				this.list = [...this.list, ...res.data];
				if (this.query.page_size > res.total) {
					this.finished = true;
				}
			} else {
				this.finished = true;
			}

		},
		//发布者确认
		complete(e) {
			uni.showModal({
				title: '提示',
				content: '确认完成',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/bossSuccess', {
							task_id: this.info.id,
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
								icon: 'none'
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							});
						}
					}
				}
			});
		},
		payment() {
			uni.showModal({
				title: '提示',
				content: '确认打款',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/pay', {
							task_id: this.info.id,
						});
						if (res.code > 0) {
							uni.showToast({
								title: '操作成功',
								icon: 'none'
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							});
						}
					}
				}
			});
		},
		//选择开发者
		async select(item) {
			uni.showModal({
				title: '提示',
				content: '确认选择他',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/chose', {
							join_user: item,
							task_id: this.info.id
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
								icon: 'none'
							});
							this.query.page = 1;
							this.list = [];
							this.update();
							this.apply();
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							});
						}
					}
				}
			});
		},
		//上架
		async save1(e) {
			uni.showModal({
				title: '提示',
				content: '是否上架',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/updateState', {
							is_up: 1,
							id: e.id
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
								icon: 'none'
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							});
						}
					}
				}
			});
		},
		//下架
		async save2(e) {
			uni.showModal({
				title: '提示',
				content: '是否下架',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/updateState', {
							is_up: 0,
							id: e.id
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
								icon: 'none'
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none'
							});
						}
					}
				}
			});
		},
		go(url) {
			uni.navigateTo({ url });
		}
	},
	onLoad(option) {
		this.query.task_id = option.task_id;
	},
	onNavigationBarButtonTap(option) {
		this.go('/pages/user/help/index');
	},
	// 计算属性
	computed: {},
	// 包含 Vue 实例可用过滤器的哈希表。
	filters: {
		dangerText(value) {
			if (value == 5) {
				return '申诉中'
			} else {
				return '申诉'
			}
		},
		sex(value) {
			if (value == null) return '--'
			return value == 1 ? '男' : '女'
		}
	},
	// 在实例创建完成后被立即调用
	created() { },
	// 在挂载开始之前被调用：相关的 render 函数首次被调用。
	beforeMount() { },
	// el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
	mounted() {
		this.init();
		this.$nextTick(() => {

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
