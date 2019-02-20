const path = require('path');
const notification = document.getElementById('notification');

const option = {
  title: 'title',
  body: 'body',
  icon: path.join(__dirname, '../public/logo.png')
};

notification.onclick = () => {
  new window.Notification(option.title, option);
};
