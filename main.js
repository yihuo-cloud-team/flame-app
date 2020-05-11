import Vue from 'vue'
import App from './App'

import './plugins/config.js'; 
import './plugins/url.js'; 
import './components.js';
import './plugins/tools.js';
import './plugins/filter.js';
import Http from './plugins/Http.js';
Vue.prototype.$http = Http;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()