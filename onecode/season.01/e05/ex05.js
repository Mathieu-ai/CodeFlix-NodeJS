var fs = require('fs');
 
fs.writeFile('onecode.txt', 'if you read this, then the file is succefully created', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});  