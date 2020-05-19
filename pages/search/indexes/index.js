export default {
    name: 'indexes',
    data() {
        return {
            key: '',
            list: [
                { name: '全部类型', id: '', }
            ],
            task_type: '',
            state_list: [{
                name: '所有进度',
                id: ''
            },
            {
                name: '招募中',
                id: 0
            },
            {
                name: '进行中',
                id: 2
            },

            {
                name: '完成',
                id: 4
            }],
            task_state: ''
        };
    },
    onLoad(res) {
        let title;
        this.key = res.key
        if (res.key == 'type') {
            title = '分类选择'
            if (res.id === '') {
                this.task_type = res.id
            } else {
                this.task_type = parseFloat(res.id)
            }

        } else {
            title = '进度选择'
            if (res.id === '') {
                this.task_state = res.id
            } else {
                this.task_state = parseFloat(res.id)
            }

        }
        uni.setNavigationBarTitle({
            title: title
        })
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            const res = await this.$http('/class/list');
            if (res.code > 0) {
                this.list = [...this.list, ...res.data]
            }
        },
        submit(item) {
            if (this.key == 'type') {
                this.task_type = item.id
                uni.setStorageSync('task_type', JSON.stringify(item))
            } else {
                this.task_state = item.id
                uni.setStorageSync('task_state', JSON.stringify(item))
            }
            setTimeout(() => {
                uni.navigateBack({
                    delta: 1
                })
            }, 500);
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