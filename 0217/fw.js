/**
 * Created by almond on 16. 2. 17..
 */
var fs = require('fs');
var data = 'Hello World';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf-8', function(error) {
    console.log('WRITE FILE SYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf-8');
console.log('WRITE FILE SYNC COMPLETE');
