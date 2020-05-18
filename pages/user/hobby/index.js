import uniIcons from "@/components/uni-icons/uni-icons.vue"
import Upload from "../../../plugins/Upload";
export default {
    name: 'hobby',
    data() {
        return {
            userInfo: {},
            show: false,
            hobby: '',
            starArr: [
                '白羊座',
                '金牛座',
                '双子座',
                '巨蟹座',
                '狮子座',
                '处女座',
                '天秤座',
                '天蝎座',
                '射手座',
                '摩羯座',
                '水瓶座',
                '双鱼座',
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
            const res = await this.$http('/user/save_info', {});
            if (res.code > 0) {
                this.userInfo = res.data;
            }
        },
        delImg(index) {
            this.userInfo.img_list.splice(index, 1)
            this.submit('删除成功')
        },
        close(index) {
            this.userInfo.like_list.splice(index, 1)
            this.submit('删除成功')
        },
        async submit(text) {
            try {
                const res = await this.$http('/user/save', this.userInfo)
                if (res.code > 0) {
                    uni.showToast({
                        title: text,
                        icon: 'none'
                    })
                }
            } catch (error) {

            }
        },
        async uploader() {
            const file = await Upload.select();
            const res = await Upload.send(file);
            // this.src = res.data.url;
            this.userInfo.img_list.push(res.data.url)
            this.submit('添加成功')
        },
        subHobby() {
            if (!this.hobby) {
                uni.showToast({
                    title: '请填写您的爱好',
                    icon: 'none'
                })
                return false
            }
            this.userInfo.like_list.push({
                color: this.get_rgba(),
                text: this.hobby
            })
            this.submit('添加成功')
            this.hobby = ''
            this.show = false
        },
        get_rgba() {
            let colorarr = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399', '#DE93F3']
            let r = Math.round(Math.random() * 5);
            return colorarr[r];
        },
        subStar(e) {
            this.userInfo.constellation = this.starArr[e.detail.value]
            this.submit('保存成功')
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
    components: { uniIcons },
};