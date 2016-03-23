/**
 * Created by almond on 16. 2. 17..
 */
var fs = require('fs');

var text = fs.readFileSync('textfile.txt', 'utf-8');
console.log(text);
