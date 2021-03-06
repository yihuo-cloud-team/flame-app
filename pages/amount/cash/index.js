import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"

export default {
	name: 'cash',
	data() {
		return {
			number: '',
			name: '',
			quota: '',

			info: {},
			query: {
				money_type: "1",
				account: "",
				real_name: "",
				money: ""
			},
			checked: 0,
			list: ['微信', '支付宝', '银行卡'],
			disabled: false,
		};
	},
	methods: {
		// 用于初始化一些数据
		init() {
			this.update();
		},
		// 用于更新一些数据
		async update() {
			const res = await this.$http('/user/info', {});
			if (res.code >= 0) {
				this.info = res.data
			}
		},
		async submit() {
			console.log(this.query)
			if (this.query.account == '') {
				uni.showToast({ title: '请输入卡号或者微信号', icon: 'none' })
				return false
			}
			if (this.query.real_name == '') {
				uni.showToast({ title: '请输入真实姓名', icon: 'none' })
				return false
			}
			if (this.query.money == '') {
				uni.showToast({ title: '请输入金额', icon: 'none' })
				return false
			}
			this.disabled = true;

			let toast = uni.showToast({ title: '申请中', icon: 'loading' });

			const res = await this.$http('/order/getMoney', this.query);
			if (res.code >= 0) {
				uni.hideToast();
				uni.showToast({ title: '操作成功', icon: 'none' })
				this.query.account = '';
				this.query.real_name = '';
				this.query.money = '';
				this.update();
			} else {
				toast.clear();
				this.$toast(res.msg)
				uni.showToast({ title: 'res.msg', icon: 'none' })
			}
			this.disabled = false;
		},
		go(url) {
			uni.navigateTo({
				url: url
			})
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
	watch: {

	},
	// 组件列表
	components: {
		uniList,
		uniListItem,

	},
};
