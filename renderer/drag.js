const fs = require('fs');

const drag = document.getElementById('drag');

drag.ondragenter = drag.ondragover = drag.ondragleave = function() {
  return false;
}

drag.addEventListener('drop', function(e) {
  e.preventDefault();

  const path = e.dataTransfer.files[0].path;

  fs.readFile(path, 'utf-8', function(err, data) {
    if (err) {
      console.error(err);
      return false;
    }
    drag.innerHTML = data;
  });
});