import Vue from 'vue'
import App from './App'

import './plugins/config.js';
import './plugins/url.js';
import './components.js';
import './plugins/tools.js';
import './plugins/Origin.js';
import './plugins/filter.js';
import Http from './plugins/Http.js';
import Time from './plugins/time.js';
import jwt from "./plugins/jwt.js";

// uni.setStorageSync("jwt", jwt.jwt);
Vue.prototype.$http = Http;

Vue.config.productionTip = false
Vue.prototype.$handleTime = function (v) {
	return new Time().pastTime(v);
}

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()