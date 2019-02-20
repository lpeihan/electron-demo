const { Menu, Tray } = require('electron');
const path = require('path');

let appIcon = null;

appIcon = new Tray(path.join(__dirname, '../public/logo.png'));

const menu = Menu.buildFromTemplate([
  {
    label: 'close',
    click: function() {
      appIcon.destroy();
    }
  }
]);

appIcon.setToolTip('my best app');
appIcon.setContextMenu(menu);
