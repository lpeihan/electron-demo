const el = document.getElementById('open');

const path = require('path');

const BrowerWindow = require('electron').remote.BrowserWindow;

let win = null;

el.addEventListener('click', function() {
  // window.open('http://music.ipeihan.top');

  win = new BrowerWindow({
    width: 300,
    height: 200,
    frame: true
    // transparent: true
  });

  win.on('close', () => {
    win = null;
  });

  win.loadURL(path.join('file:', __dirname, 'model.html'));
  window.open(path.join('file:', __dirname, 'model.html'));
});
