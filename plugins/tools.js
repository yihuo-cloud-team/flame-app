import Vue from 'vue';
import U from './url.js';

Vue.prototype.$curPage = function() {
	let curPage = getCurPage();
	//在微信小程序或是app中，通过curPage.options；如果是H5，则需要curPage.$route.query（H5中的curPage.options为undefined，所以刚好就不需要条件编译了）
	let curParam = curPage.options || curPage.$route.query;
	return curParam

	function getCurPage() {
		let pages = getCurrentPages();
		let curPage = pages[pages.length - 1];
		return curPage
	}
}

Vue.prototype.$getUrl = function (url = '') {
  if (!url) return '';
  if (url.indexOf('./') >= 0) return url;
  let _url;
  if (url.indexOf('http') == -1) {
    _url = U.imageUrl + url;
  } else {
    _url = url;
  }
  _url = _url.replace(/\\/g, "/");
  return _url;
}

Vue.prototype.$twoJsonMerge = function (json1,json2) {
  var length1 = 0,length2 = 0,jsonStr,str;
  	for(var ever in json1) length1++;
  	for(var ever in json2) length2++; 
  	if(length1 && length2)str = ',';
  	else str = '';
  	jsonStr = ((JSON.stringify(json1)).replace(/,}/,'}') + (JSON.stringify(json2)).replace(/,}/,'}')).replace(/}{/,str);
  	return JSON.parse(jsonStr);
}
