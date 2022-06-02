
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length>0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]; 
            const animItemHeight = animItem.offsetHeight; /* Высота объекта */
            const animItemOffset = offset(animItem).top; /* Высота от объекта до верхней границы страницы */
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active'); /* Если у объекта есть класс _anim-no-hide то у него убирается класс
                    _active и анимация не будет повторно проигрываться для такого объекта. */
                animItem.classList.remove('_active');
            }

            }
        }
        
    }
    function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
    animOnScroll();
}, 400);
}