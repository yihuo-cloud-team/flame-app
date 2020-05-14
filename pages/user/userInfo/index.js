import uniTag from "@/components/uni-tag/uni-tag.vue"
export default {
    name: 'userInfo',
    data() {
        return {
            album: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589281453412&di=955dc8abb77c9ca33c58a5313b0defb0&imgtype=0&src=http%3A%2F%2Fpic.feizl.com%2Fupload%2Fallimg%2F170614%2F22550Q911-0.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589281453412&di=080995bd8f99ac79df70ba294f417ef5&imgtype=0&src=http%3A%2F%2Fpic.feizl.com%2Fupload%2Fallimg%2F170615%2F12032J3X-1.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589281453411&di=534a544d0dd02b54c4b6417b31bf89c9&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170218%2F20170218105029_9dc6b1c95dbf9be770d8f5b04924ad32_5.jpeg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589281453410&di=3a32418fe1ce8625e3b0898952ada1ac&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20170406%2F20170406134755_357856349beab76664d9d13364729de1_6.jpeg'
            ]
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            // const res = await this.$http.post('', {});
        },
        see(index) {
            uni.previewImage({
                current: index,
                urls: this.album
            })
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
    components: {uniTag},
};