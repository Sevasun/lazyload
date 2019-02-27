import merge from './modules/common';
import LazyLoad from './modules/lazyload'
// init
document.addEventListener('DOMContentLoaded', function() {
	let lazyLoad = new LazyLoad({
		sourceAttr: 'data-src'
	})
});
