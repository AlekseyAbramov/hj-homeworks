function Slider(container) {
    container.querySelector('.slide').classList.add('slide-current');

    const buttons = container.querySelectorAll('.slider-nav a');
    const next = Array.from(buttons).find(function(el) {
        return el.dataset.action === 'next';
    });
    const prev = Array.from(buttons).find(function(el) {
        return el.dataset.action === 'prev';
    });
    const first = Array.from(buttons).find(function(el) {
        return el.dataset.action === 'first';
    });
    const last = Array.from(buttons).find(function(el) {
        return el.dataset.action === 'last';
    });

    first.classList.add('disabled');
    prev.classList.add('disabled');

    next.addEventListener('click', function(event) {
        if (!event.target.classList.contains('disabled')) {
            moveSlide(true);
    }});
    prev.addEventListener('click', function(event) {
        if (!event.target.classList.contains('disabled')) {
            moveSlide(false);
    }});
    first.addEventListener('click', function(event) {
        if (!event.target.classList.contains('disabled')) {
            endSlide(true);
    }});
    last.addEventListener('click', function(event) {
        if (!event.target.classList.contains('disabled')) {
            endSlide(false);
    }});
  
    function moveSlide(isForward) {
        const currentSlide = container.querySelector('.slide-current');
        const activatedSlide = isForward ? currentSlide.nextElementSibling : currentSlide.previousElementSibling;
        currentSlide.classList.remove('slide-current');
        activatedSlide.classList.add('slide-current');
        activatedSlide.nextElementSibling ? next.classList.remove('disabled') : next.classList.add('disabled');
        activatedSlide.nextElementSibling ? last.classList.remove('disabled') : last.classList.add('disabled');
        activatedSlide.previousElementSibling ? prev.classList.remove('disabled') : prev.classList.add('disabled');
        activatedSlide.previousElementSibling ? first.classList.remove('disabled') : first.classList.add('disabled');
    }

    function endSlide(isForward) {
        const currentSlide = container.querySelector('.slide-current');
        const firstSlide = container.querySelector('.slides').firstElementChild;
        const lastSlide = container.querySelector('.slides').lastElementChild;
        currentSlide.classList.remove('slide-current');
        if (isForward) {
            firstSlide.classList.add('slide-current');
            prev.classList.add('disabled');
            first.classList.add('disabled');
            next.classList.remove('disabled');
            last.classList.remove('disabled');
        } else {
            lastSlide.classList.add('slide-current');
            prev.classList.remove('disabled');
            first.classList.remove('disabled');
            next.classList.add('disabled');
            last.classList.add('disabled');
        }
    }
  }
  const slider = document.querySelectorAll('.slider');
  Array.from(slider).forEach(item => Slider(item));