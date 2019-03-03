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

    function loadImg(item) {
        if(item.getAttribute(self.settings.sourceAttr)) {
            return new Promise((resolve) => {
                let address = item.getAttribute(self.settings.sourceAttr);
                if(item.tagName === "IMG") {
                    item.setAttribute('src', address);
                    item.removeAttribute(self.settings.sourceAttr);
                    item.addEventListener('load', () => {
                        resolve();
                    });
                } else {
                    item.style.backgroundImage = `url('${address}')`;
                    item.removeAttribute(self.settings.sourceAttr);
                    resolve();
                }
            });
        }
    }

    // loop version
    async function loadAll(list) {
        for(let i = 0; i < list.length;) {
            await loadImg(list[i]);
            i++;
        }
    }

    // recursion version
    // async function loadAll(list) {
    //     list = Array.from(list);
    //     if(list.length > 0) {
    //         await loadImg(list[0]);
    //         list.shift();
    //         loadAll(list);
    //     }
    // }

    if(this.settings.loadType === 'all') {
        loadAll(lazyItems);
    }
};

export default LazyLoad;
