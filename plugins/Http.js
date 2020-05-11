import url from './url.js';
const baseUrl = url.serverUrl;
import config from './config';

function to() {
    return Object.keys(config).map(k => {
        let v = '';
        if (typeof config[k] == 'function') {
            v = `${k}=${config[k]()}`;
        } else {
            v = `${k}=${config[k]}`;
        } config
        return v;
    }).join(';');
}


let Http = async function(url, data) {
	try{
		let [error, res] = await uni.request({
			url: baseUrl + url, //仅为示例，并非真实接口地址。
			data: data,
			method: 'POST',
			header:{
				Authorization: to(config)
			},
		});
		return res.data
	}
	catch(e){
		console.log(e)
	}
	
}

export default Http;
