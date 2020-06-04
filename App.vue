<script>
import Vue from 'vue';

export default {
	onLaunch: function() {
		// uni.clearStorageSync();
		if (!uni.getStorageSync('jwt')) {
			uni.reLaunch({
				url: '/pages/login/index'
			});
		} else {
			if (uni.getStorageSync('cid') != '' && uni.getStorageSync('cid') != 'undefined' && uni.getStorageSync('cid') != 'null'){
				this.$http('/user/save', {
					cid: plus.push.getClientInfo().clientid
				});
			}
		}
		const _handlePush = function(message) {
			// TODO
			if (typeof message.payload == 'string') {
				message.payload = JSON.parse(message.payload);
			}
			uni.navigateTo({
				url: message.payload.pagePath
			});
			// uni.showModal({
			//   title: "提示",
			//   content: JSON.stringify(message.payload),
			//   success: res => {
			//     uni.navigateTo({
			//       url: message.payload.pagePath
			//     });
			//   }
			// });
			
		};
		plus.push.addEventListener('click', _handlePush);
		plus.push.addEventListener('receive', _handlePush);

		plus.runtime.setBadgeNumber(0);
		plus.runtime.setBadgeNumber(-1);
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
			
				break;
			case 'ios':
				var GeTuiSdk = plus.ios.importClass('GeTuiSdk');
				GeTuiSdk.setBadge(0);
				break;
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
@import 'colorui/main.css';
@import 'colorui/icon.css';
</style>
