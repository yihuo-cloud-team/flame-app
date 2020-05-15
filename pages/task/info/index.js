export default {
	name: 'info',
	layout: 'sub',
	data() {
		return {
			state: false,
			list: [],
			loading: false,
			finished: false,
			info: {},
			list: [],
			page: 0,
			page_size: 10,
			img: "https://api.yihuo-cloud.com/public/files/20200326/202003260703295347.jfif",

			stateList: [{
				title: '招募中',
				task_state: 0
			}, {
				title: '进行中',
				task_state: 2
			}, {
				title: '中止',
				task_state: 3
			}, {
				title: '完成',
				task_state: 4
			}, {
				title: '待验收',
				task_state: 5
			}, {
				title: '失败',
				task_state: 6
			}],

			task_id: 114
		}
	},
	methods: {
		// 用于初始化一些数据
		init() {
			this.update();
			this.apply();
		},
		// 用于更新一些数据
		async update() {

			const res = await this.$http('/task/info/ai', {
				// task_id: this.$route.query.task_id
				task_id: this.task_id,
			});
			console.log(res)
			if (res.code >= 0) {
				this.info = res.data;
			}
		},

		async apply() {
			if (this.finished) return;
			this.loading = true;
			const res = await this.$http('/task/applyList', {
				task_id: this.task_id,
				page: this.page,
				page_size: this.page_size
			});
			console.log(res)
			if (res.code > 0) {
				this.loading = false;
				this.list = [...this.list, ...res.data];
			}
			if (this.list.length >= res.total) {
				this.finished = true;
			}
			this.loading = false;
			this.page++;
		},

		// //开发者确认完成
		confirm1(e) {
			uni.showModal({
				title: '提示',
				content: '确认完成',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/updateState', {
							id: e.id,
							task_state: 5
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
							});
						}
					}
				}
			});
		},
		// //发布者确认
		confirm2(e) {
			uni.showModal({
				title: '提示',
				content: '确认完成',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/bossSuccess', {
							task_id: e.id,
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
							});
						}
					}
				}
			});
		},
		//发布者中止任务
		quxiao(e) {
			uni.showModal({
				title: '提示',
				content: '确认中止',
				success: async (res) => {
					if (res.confirm) {
						const res = await this.$http('/task/updateState', {
							id: e.id,
							task_state: 3,
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
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
							task_id: this.task_id
						});
						if (res.code >= 0) {
							uni.showToast({
								title: '操作成功',
							});
							this.page = 1;
							this.list = [];
							this.update();
							this.apply();
						} else {
							uni.showToast({
								title: res.msg,
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
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
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
							});
							this.update();
						} else {
							uni.showToast({
								title: res.msg,
							});
						}
					}
				}
			});
		},
		goUsersInfo(id) {
			uni.navigateTo({
				url: '/pages/user/userInfo?id=' + id,
			});
		},
		goHelp() {
			uni.navigateTo({
				url: '/pages/user/help',
			});
		},
		goDeposit(task_order, price) {
			uni.navigateTo({
				url: '/pages/amount/deposit?task_order=' + task_order + '&&price=' + price,
			});
		},
		goEdit(id) {
			uni.navigateTo({
				url: '/pages/task/edit?id=' + id,
			});
		},
		goEnroll(id) {
			uni.navigateTo({
				url: '/pages/enroll?id=' + id,
			});
		},
		goRefund(id) {
			uni.navigateTo({
				url: '/task/refund?id=' + id,
			});
		}
	},
	// 计算属性
	computed: {},
	// 包含 Vue 实例可用过滤器的哈希表。
	filters: {
		sex(value) {
			if (value == null) return '--'
			return value == 1 ? '男' : '女'
		}
	},
	// 在实例创建完成后被立即调用
	created() {},
	// 在挂载开始之前被调用：相关的 render 函数首次被调用。
	beforeMount() {},
	// el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
	mounted() {

		this.$nextTick(() => {
			this.init();
		});
	},
	// 数据更新时调用，发生在虚拟 DOM 打补丁之前。
	beforeUpdate() {},
	// keep-alive 组件激活时调用。
	activated() {},
	// keep-alive 组件停用时调用。
	deactivated() {},
	// 实例销毁之前调用。在这一步，实例仍然完全可用。
	beforeDestroy() {},
	//Vue 实例销毁后调用。
	destroyed() {},
	// 当捕获一个来自子孙组件的错误时被调用。
	errorCaptured() {},
	// 包含 Vue 实例可用指令的哈希表。
	directives: {},
	// 一个对象，键是需要观察的表达式，值是对应回调函数。
	watch: {},
	// 组件列表
	components: {},
};
