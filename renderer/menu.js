const ipc = require('electron').ipcRenderer;

const menu = document.querySelector('#menu');

function send() {
  ipc.send('show-context-menu');
}

document.addEventListener('contextmenu', send);
menu.addEventListener('click', send);