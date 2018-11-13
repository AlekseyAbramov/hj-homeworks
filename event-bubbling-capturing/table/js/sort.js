'use strict';

function handleTableClick(event) {
  if (event.target.classList.contains('prop__name')) {
    if (!event.target.dataset.dir) {
        event.target.dataset.dir = 1;
    } else {
        if (event.target.dataset.dir == 1) {
            event.target.dataset.dir = -1;
        } else {
            event.target.dataset.dir = 1;
        }
    }
    document.querySelector('table').dataset.sortBy = event.target.dataset.propName;
    sortTable(document.querySelector('table').dataset.sortBy,event.target.dataset.dir);
  }
}
