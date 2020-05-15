import uniIcons from "@/components/uni-icons/uni-icons.vue"
export default {
    name: 'userInfo',
    data() {
        return {
            userInfo: {},
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
        },
        // 用于更新一些数据
        async update() {
            let res = await this.$http('/user/save_info', {});
            if (res.code > 0) {
                this.userInfo = res.data;
            }
            // if (!this.get_id) {
            //     let res = await this.$http('/user/save_info', {
            //         id: this.$route.query.id
            //     });
            //     if (res.code > 0) {
            //         this.userInfo = res.data;
            //     }
            // } else {
            //     let res = await this.$http('/user/save_info', {});
            //     if (res.code > 0) {
            //         this.userInfo = res.data;
            //     }
            // }
        },
        see(index) {
            let arr = this.userInfo.img_list.map(url => this.$getUrl(url))
            uni.previewImage({
                current: index,
                urls: arr
            })
        },
        go(url) {
            uni.navigateTo({
                url: url
            })
        }
    },
    onShow() {
        this.update();
    },
    // 计算属性
    computed: {
        get_id() {
            return typeof this.$route.query.id == 'undefined'
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
    components: { uniIcons },
};