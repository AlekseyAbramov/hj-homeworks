'use strict';

const eyeLeft = document.querySelector('.cat_position_for_left_eye');
const eyeRight = document.querySelector('.cat_position_for_right_eye');

document.addEventListener("mousemove", event => {
  tracking(eyeLeft, event.pageX, event.pageY);
  tracking(eyeRight, event.pageX, event.pageY);
});

function tracking(eye, x, y) {
  const bounds = eye.getBoundingClientRect();

  if (x > bounds.right) {
    eye.firstElementChild.style.left = 50 + "%";
  }
  if (x < bounds.left) {
    eye.firstElementChild.style.left = 0 + "px";
  }
  if (y < bounds.top) {
    eye.firstElementChild.style.top = 0 + "px";
  }
  if (y > bounds.bottom) {
    eye.firstElementChild.style.top = 50 + "%";
  }
}
