/**
 * Created by almond on 16. 2. 17..
 */
var fs = require('fs');

try {
    var data = fs.readFileSync('textfile.txt', 'utf-8');
    console.log(data);
}
catch(e) {
    console.log(e);
}

try {
    fs.writeFileSync('textfile.txt', 'Hello World!!', 'utf-8');
}
catch(e) {
    console.log(e);
}
