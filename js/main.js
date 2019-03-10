import merge from './modules/common';
import LazyLoad from './modules/lazyload'
import InViewport from './modules/scroll';
// init
document.addEventListener('DOMContentLoaded', function() {
	let lazyLoad = new LazyLoad({
		sourceAttr: 'data-src'
	});

	let inViewport = new InViewport({
		target: '.viewport'
	});
});
