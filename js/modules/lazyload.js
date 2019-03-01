import merge from './common';

function LazyLoad(options) {
    let defaultOptions = {
        sourceAttr: 'data-src',
        lazySelector: '[data-lazy]'
    };
    this.settings = merge(defaultOptions, options);
    let self = this;
    
    let lazyItems = document.querySelectorAll(`[${this.settings.sourceAttr}]`);
    // let img = [];
    // let bg = [];
    function addSrc(element) {
        let address = element.getAttribute(self.settings.sourceAttr);
        
        return new Promise ((resolve) => {
            setTimeout(() => {
                console.log('1');
                element.setAttribute('src', address);
            }, 1000);
        });
    };

    for(let i = 0; i < lazyItems.length; i++) {
        if(lazyItems[i].tagName === "IMG") {
            addSrc(lazyItems[i]);
        }
    }; 
};

export default LazyLoad;
