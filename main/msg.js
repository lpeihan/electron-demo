const { ipcMain } = require('electron');

ipcMain.on('msg-sync', event => {
  event.returnValue = 'hello world';
});

ipcMain.on('msg', (event, args) => {
  console.log(args.name);
  event.sender.send('msg-back', { name: 'yugo' });
});
