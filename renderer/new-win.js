const { ipcRenderer } = require('electron');
const { BrowserWindow } = require('electron').remote;
const path = require('path');

const btn = document.getElementById('new');

let win;

btn.addEventListener('click', () => {
  const winId = BrowserWindow.getFocusedWindow().id;
  console.log('winId', winId);

  win = new BrowserWindow({
    width: 500,
    height: 500,
    show: true
  });

  win.loadURL(path.join('file:', __dirname, '../new-win.html'));
  win.webContents.openDevTools();
  win.webContents.on('did-finish-load', event => {
    win.webContents.send('new-win-msg', winId, { name: 'yugo', text: 'new-win-msg' });
  });

  ipcRenderer.on('new-win-msg-back', (event, winId, msg) => {
    console.log(msg);
  });
});

