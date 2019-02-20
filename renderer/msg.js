const { ipcRenderer } = require('electron');

const msg = document.getElementById('msg');

msg.addEventListener('click', function() {
  const msg = ipcRenderer.sendSync('msg-sync');

  console.log(msg);

  ipcRenderer.send('msg', { name: 'alice' });
  ipcRenderer.on('msg-back', function(event, args) {
    console.log(args.name);
  });
});
