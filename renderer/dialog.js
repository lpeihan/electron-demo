const { ipcRenderer } = require('electron');

const error = document.getElementById('error-dialog');
const message = document.getElementById('message-dialog');
const open = document.getElementById('open-dialog');
const save = document.getElementById('save-dialog');

error.addEventListener('click', function() {
  ipcRenderer.send('error-dialog');
});

message.addEventListener('click', function() {
  ipcRenderer.send('message-dialog');
});

open.addEventListener('click', function() {
  ipcRenderer.send('open-dialog');
});

save.addEventListener('click', function() {
  ipcRenderer.send('save-dialog');
});
