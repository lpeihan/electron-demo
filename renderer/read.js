const fs = require('fs');

const read = document.getElementById('read');

read.addEventListener('click', function() {
  fs.readFile('package.json', (err, data) => {
    console.log(data.toString());
  });
});