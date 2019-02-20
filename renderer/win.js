const { BrowserWindow } = require('electron').remote;
const { ipcRenderer } = require('electron');

onload = () => {
  ipcRenderer.on('new-win-msg', (event, winId, msg) => {
    let win = BrowserWindow.fromId(winId);
    console.log(msg);
    win.webContents.send('new-win-msg-back', winId, { name: 'alice', text: 'new-win-msg-back' });
  });
};
