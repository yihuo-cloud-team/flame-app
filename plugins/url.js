import Vue from 'vue';

let Url = {
  // serverUrl: 'https://api.flame.yihuo-cloud.cn/app',//测试环境   
  serverUrl: 'https://api.flame.yihuo-cloud.com/app',//生产环境
  // serverUrl: 'http://192.168.0.143:88/app',//李子龙 
  // serverUrl: 'http://192.168.0.100:12193/app',//李传浩的本地
  // serverUrl: 'http://192.168.0.114:84/app',//吴杰
  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


