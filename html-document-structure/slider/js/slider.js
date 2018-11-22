function Slider(container) {
      container.querySelector('.slide').classList.add('slide-current');

      const buttons = container.querySelectorAll('.slider-nav a');
      const next = document.querySelector('[data-action = next]');
      const prev = document.querySelector('[data-action = prev]');
      const first = document.querySelector('[data-action = first]');
      const last = document.querySelector('[data-action = last]');

      first.classList.add('disabled');
      prev.classList.add('disabled');

      next.addEventListener('click', function(event) {
              moveSlide(event);
      });
      prev.addEventListener('click', function(event) {
              moveSlide(event);
      });
      first.addEventListener('click', function(event) {
              moveSlide(event);
      });
      last.addEventListener('click', function(event) {
              moveSlide(event);
      });

      function moveSlide(event) {
        if (!event.target.classList.contains('disabled')) {
            const currentSlide = container.querySelector('.slide-current');
            const firstSlide = container.querySelector('.slides').firstElementChild;
            const lastSlide = container.querySelector('.slides').lastElementChild;
            currentSlide.classList.remove('slide-current');
            if (event.target.dataset.action === 'next') {
              const activatedSlide = currentSlide.nextElementSibling;
              getClass(activatedSlide);
            }
            if (event.target.dataset.action === 'prev') {
              const activatedSlide = currentSlide.previousElementSibling;
              getClass(activatedSlide);
            }
            if (event.target.dataset.action === 'first') {
                firstSlide.classList.add('slide-current');
                prev.classList.add('disabled');
                first.classList.add('disabled');
                next.classList.remove('disabled');
                last.classList.remove('disabled');
            }
            if (event.target.dataset.action === 'last') {
                lastSlide.classList.add('slide-current');
                prev.classList.remove('disabled');
                first.classList.remove('disabled');
                next.classList.add('disabled');
                last.classList.add('disabled');
            }
          }
        }

      function getClass(activatedSlide) {
        activatedSlide.classList.add('slide-current');
        activatedSlide.nextElementSibling ? next.classList.remove('disabled') : next.classList.add('disabled');
        activatedSlide.nextElementSibling ? last.classList.remove('disabled') : last.classList.add('disabled');
        activatedSlide.previousElementSibling ? prev.classList.remove('disabled') : prev.classList.add('disabled');
        activatedSlide.previousElementSibling ? first.classList.remove('disabled') : first.classList.add('disabled');
      }
}
  const slider = document.querySelectorAll('.slider');
  Array.from(slider).forEach(item => Slider(item));
