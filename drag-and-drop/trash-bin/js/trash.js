'use strict';

let movedLogo = null;
let shiftX = 0;
let shiftY = 0;

document.addEventListener('mousedown', event => {
  if (event.target.classList.contains('logo')) {
    movedLogo = event.target;
    shiftX = event.pageX - event.target.getBoundingClientRect().left - window.pageXOffset;
    shiftY = event.pageY - event.target.getBoundingClientRect().top - window.pageYOffset;
  }
});

document.addEventListener('mousemove', event => {
  if (movedLogo) {
    event.preventDefault();
    movedLogo.style.left = event.pageX - shiftX + 'px';
    movedLogo.style.top = event.pageY - shiftY + 'px';
    movedLogo.classList.add('moving');
  }
});

document.addEventListener('mouseup', event => {
  if (movedLogo) {
    movedLogo.style.visibility = 'hidden';
    const trash = document.elementFromPoint(event.clientX, event.clientY).closest('#trash_bin');
    movedLogo.style.visibility = 'visible';
    if (trash) {
      movedLogo.style.display = 'none';
    }
    movedLogo.classList.remove('moving');
    movedLogo = null;
  }
})
