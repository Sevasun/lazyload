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
            console.log(element.getAttribute('src'));
            element.addEventListener('load', () => {
                setTimeout(element.setAttribute('src', address), 1000);
                console.log(element);
            });
        });
    };

    for(let i = 0; i < lazyItems.length; i++) {
        // if(lazyItems[i].tagName === "IMG") {
        //     addSrc(lazyItems[i]);
        // }
        lazyItems[i].onload = function() {
            console.log('load');
        };
    };

    
};

export default LazyLoad;
