const listBlock = document.querySelector('.list-block');
const checkBox = listBlock.getElementsByTagName('input');
const output = listBlock.getElementsByTagName('output')[0];
function viewTotal() {
  let i = 0;
  for (let check of checkBox) {
    if (check.checked) {
      i++;
    }
  }
  output.value = i + ' из ' + checkBox.length;
  i === checkBox.length ? listBlock.classList.add('complete') : listBlock.classList.remove('complete');
}
document.addEventListener('DOMContentLoaded', viewTotal);
for (let chek of checkBox) {
  chek.addEventListener('input', viewTotal);
}
