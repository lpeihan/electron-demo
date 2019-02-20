const { ipcMain, dialog } = require('electron');

ipcMain.on('error-dialog', () => {
  dialog.showErrorBox('title', 'content');
});
ipcMain.on('message-dialog', () => {
  dialog.showMessageBox(
    {
      type: 'info',
      title: 'message',
      message: 'hello',
      buttons: ['ok', 'cancel']
    },
    index => {
      if (index == 0) {
        console.log('You click ok.');
      } else {
        console.log('You click cancel');
      }
    }
  );
});

ipcMain.on('open-dialog', () => {
  dialog.showOpenDialog(
    {
      properties: ['openFile', 'openDirectory']
    },
    files => {
      console.log(files);
    }
  );
});

ipcMain.on('save-dialog', () => {
  dialog.showSaveDialog(
    {
      title: 'save some file',
      filters: [{ name: 'some', extensions: ['js'] }]
    },
    filename => {
      console.log(filename);
    }
  );
});
