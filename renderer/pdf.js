const { ipcRenderer } = require('electron');

const pdf = document.getElementById('pdf');

pdf.addEventListener('click', () => {
  ipcRenderer.send('pdf');
});
