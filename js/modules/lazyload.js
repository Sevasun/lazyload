import merge from './common';

function LazyLoad(options) {
    let defaultOptions = {
        sourceAttr: 'data-src',
        loadType: 'all'
    };
    this.settings = merge(defaultOptions, options);
    let self = this;
    // this.sourceAttr = this.settings.sourceAttr;
    
    let lazyItems = document.querySelectorAll(`[${this.settings.sourceAttr}]`);
    // let img = [];
    // let bg = [];
    // function addSrc(element) {
    //     let address = element.getAttribute(self.settings.sourceAttr);
        
    //     return new Promise ((resolve) => {
    //         setTimeout(() => {
    //             console.log('1');
    //             element.setAttribute('src', address);
    //         }, 1000);
    //     });
    // };

    // for(let i = 0; i < lazyItems.length; i++) {
    //     if(lazyItems[i].tagName === "IMG") {
    //         addSrc(lazyItems[i]);
    //     }
    // }; 
    // function getAddress() {
    //     let address = self.getAttribute(self.settings.sourceAttr);
    //     return address;
    // }

    // function setSrc(addr) {
    //     self.setAttribute('src', addr);
    // }

    function loadImg(item) {
        if(item.getAttribute(self.settings.sourceAttr)) {
            return new Promise((resolve) => {
                let address = item.getAttribute(self.settings.sourceAttr);
                if(item.tagName === "IMG") {
                    item.setAttribute('src', address);
                } else {
                    item.style.backgroundImage = `url('${address}')`;
                }
                resolve();
            });
        }
    }

    // if(this.settings.loadType === 'all') {
    //     let i = 0;
    //     // for(let i =0; i < lazyItems.length; i++) {
    //     //     loadImg(lazyItems[i]);
    //     // }
    //     while(i < lazyItems.length) {
    //         // loadImg(lazyItems[i]);
    //         // lazyItems[i].addEventListener('change', () => {
    //         //     console.log(i);
    //         //     i++;
    //         // });
    //     }
    // }
};

export default LazyLoad;
