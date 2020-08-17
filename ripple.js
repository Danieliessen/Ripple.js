function getElementOffset(el) {
        let top = 0;
        let left = 0;
        let element = el;

        // Loop through the DOM tree
        // and add it's parent's offset to get page offset
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top,
            left,
        };
    }
    Array.prototype.forEach.call(document.getElementsByClassName('ripple'), function(e){
       let ripple = document.createElement('div');
       let circle = document.createElement('span');
        circle.classList.add('c-circle');
        ripple.classList.add('c-ripple');
        ripple.appendChild(circle);
        e.appendChild(ripple);
        ripple.addEventListener('click', function(args){
            let elementOffset = getElementOffset(ripple.parentElement);
            let  x = args.pageX - elementOffset.left;
            let  y = args.pageY - elementOffset.top;
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
            this.classList.add('is-active');
        });
        ripple.addEventListener('animationend', function (ear) {
            this.classList.remove('is-active');
        });
    });
