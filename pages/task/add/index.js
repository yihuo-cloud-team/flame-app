import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
import uniTag from "@/components/uni-tag/uni-tag.vue"
import Upload from "../../../plugins/Upload"


export default {
	name: 'add',
	data() {
		return {
			form: {
				task_name: "", //任务名称
				task_type: 0, //任务类型
				price: "", //任务价格
				info: "", //任务详情
				p: "", //省
				c: "", //市
				a: "", //区
				contact: "", //联系方式
				cycle: "", //任务周期
				address: "", //详细地址
				img: ""
			},
			area: [],
			areaList: [],
			arealabel: '',
			classList: [],
			priceList: [],
		};
	},
	methods: {
		// 用于初始化一些数据
		init() {

		},
		// 用于更新一些数据
		async update(query) {
			const res = await this.$http('/class/list', {});
			if (res.code >= 0) {
				this.classList = res.data;
				this.form.task_type = this.classList[0].id;
			}
			if (query.type) {
				this.form.task_type = parseInt(query.type)
			}
		},
		go(url) {
			uni.navigateTo({
				url: url
			})
		},
		change() {
			this.classList.forEach(res => {
				if (this.form.task_type === res.id) {
					this.form.img = this.$getUrl(res.icon);
					return
				}
			})
		},
		price(num) {
			this.form.price = num;
		},
		async upload() {
			const file = await Upload.select();
			const res = await Upload.send(file);
			this.form.img = res.data.url;
		},
		async submit() {
			if (this.form.task_name == '') {
				uni.showToast({
					title: '请填写任务名称',
					icon: 'none'
				})
				return false;
			};
			if (this.form.img == '') {
				uni.showToast({
					title: '请上传图片',
					icon: 'none'
				})
				return false;
			};
			if (this.form.task_type == '') {
				uni.showToast({
					title: '请选择任务类别',
					icon: 'none'
				})
				return false;
			};

			if (this.form.price == '') {
				uni.showToast({
					title: '请填写任务价格',
					icon: 'none'
				})
				return false;
			} else {
				if (this.form.price < this.min_price) {
					uni.showToast({
						title: `任务价格不得低于${this.min_price}元`,
						icon: 'none'
					})
					return false;
				}
			};

			if (this.form.cycle == '') {
				uni.showToast({
					title: '请填写任务天数',
					icon: 'none'
				})
				return false;
			};
			if (typeof this.form.cycle == 'string') {
				uni.showToast({
					title: '任务天数请输入数字',
					icon: 'none'
				})
				return false;
			}
			if (this.form.info == '') {
				uni.showToast({
					title: '请填写任务详情',
					icon: 'none'
				})
				return false;
			};
			if (this.form.p == '') {
				uni.showToast({
					title: '请选择省市区',
					icon: 'none'
				})
				return false;
			};
			if (this.form.address == '') {
				uni.showToast({
					title: '请填写详细地址',
					icon: 'none'
				})
				return false;
			};

			if (this.form.contact == '') {
				uni.showToast({
					title: '请填写联系方式',
					icon: 'none'
				})
				return false;
			};
			const res = await this.$http('/task/save', this.form);
			console.log(res)
			if (res.code >= 0) {
				uni.showToast({
					title: '操作成功',
					icon: 'none'
				})
				uni.redirectTo({
					url: `/pages/amount/deposit/index?price=${this.form.price}&&task_order=${res.data.task_order}`,
				})
			} else {
				uni.showToast({
					title: res.msg,
					icon: 'none'
				})
			}

		},

		onConfirm(e) {
			this.areaList = e.labelArr;
			this.arealabel = e.label
			this.form.p = e.areaCode.slice(0, 2) + '0000'
			this.form.c = e.areaCode.slice(0, 4) + '00'
			this.form.a = e.areaCode
		},
		openCity() {
			if (this.areaList.length > 0) {
				var index = this.$refs.simpleAddress.queryIndex(this.areaList, 'label');
			} else {
				var index = this.$refs.simpleAddress.queryIndex(['上海市', '市辖区', '松江区'], 'label');
			}
			this.area = index.index;
			this.$refs.simpleAddress.open();
		}
	},
	// 计算属性
	onLoad(query) {
		this.update(query);
	},
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
		'form.task_type': function () {
			this.classList.forEach(res => {
				if (this.form.task_type === res.id) {
					this.priceList = res.price;
					console.log(this.priceList)
				}
			})
		}
	},
	// 组件列表
	components: {
		uniList,
		uniListItem,
		uniTag
	},
};