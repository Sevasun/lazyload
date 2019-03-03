import merge from './common';

function InViewport(options) {
    let defaultOptions = {
        target: '.viewport',
        mode: 0,
        toggle: true
    }

    this.settings = merge(options, defaultOptions);
    this.target = document.querySelectorAll(this.settings.target);

    let self = this;

    if (this.settings.toggle) {
        toggle();
    } else {
        appear();
    }

    function getPosition(item) {
        let top = item.getBoundingClientRect().top - window.innerHeight;
        let bottom = item.getBoundingClientRect().top + item.offsetHeight;
        
        let position = {
            'top': top,
            'bottom': bottom
        }
        return position;
    }

    function appearInViewport(item) {
        let position = getPosition(item);
        if(position.top >= 0 && position.bottom <= 0) {
            item.classList.add('in-viewport');
        } else if (position.bottom >= 0 && position.top <= 0) {
            item.classList.add('in-viewport');
        }
    }

    function toggleInViewport(item) {
        let position = getPosition(item);
        let active = false;
        if (position.top >= 0 && position.bottom <= 0) {
            item.classList.add('in-viewport');
        } else if (position.bottom >= 0 && position.top <= 0) {
            item.classList.add('in-viewport');
        } else {
            item.classList.remove('in-viewport');
        }
    };

    function appear() {
        window.addEventListener('load', () => {
            for(let i = 0; i < self.target.length; i++) {
                appearInViewport(self.target[i]);
            }
        });
    
        window.addEventListener('scroll', () => {
            for(let i = 0; i < self.target.length; i++) {
                appearInViewport(self.target[i]);
            }
        });
    };

    function toggle() {
        window.addEventListener('load', () => {
            for(let i = 0; i < self.target.length; i++) {
                toggleInViewport(self.target[i]);
            }
        });
    
        window.addEventListener('scroll', () => {
            for(let i = 0; i < self.target.length; i++) {
                toggleInViewport(self.target[i]);
            }
        });
    };
}

export default InViewport;