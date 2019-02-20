const { Menu, app, ipcMain, BrowserWindow } = require('electron');

let template = [
  {
    label: 'one',
    submenu: [
      {
        label: 'two'
      },
      {
        type: 'separator'
      },
      {
        label: 'hello',
        click: () => {
          console.log('hello');
        }
      }
    ]
  },
  {
    label: 'world',
    submenu: [
      {
        label: 'mmm'
      }
    ]
  }
];

let menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);

app.dock.setMenu(menu);

ipcMain.on('show-context-menu',(e)=>{
  const win = BrowserWindow.fromWebContents(e.sender);
  menu.popup(win);
});
