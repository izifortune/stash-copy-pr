'use strict';

function copyToClipboard(text) {
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.innerHTML = text;
  copyDiv.unselectable = 'off';
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand('Copy', false, null);
  document.body.removeChild(copyDiv);
}

let prName = (document.querySelectorAll('.source-branch .name')[0] || {}).innerText;
if (prName) {
  console.log(prName);
  copyToClipboard(prName);
}
