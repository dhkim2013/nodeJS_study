/**
 * Created by almond on 16. 2. 17..
 */
var fs = require('fs');

fs.readFile('textfile.txt', 'utf-8', function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});

fs.writeFile('textfile.txt', 'Hello World!', 'utf-8', function(error) {
   if(error) {
       console.log(error);
   }
    else {
       console.log('FILE WRITE CONPLETE');
   }
});
