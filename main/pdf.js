const { BrowserWindow, ipcMain, shell } = require('electron');

const path = require('path');
const fs = require('fs');
const os = require('os');

ipcMain.on('pdf', function() {
  const pdfPath = path.join(os.tmpdir(), 'electron.pdf');
  const win = BrowserWindow.getFocusedWindow();

  win.webContents.printToPDF({}, (err, data) => {
    if (err) {
      console.error(err);
    }
    fs.writeFile(pdfPath, data, error => {
      if (error) {
        console.error(error);
      }
      shell.openExternal('file://' + pdfPath);
    });
  });
});