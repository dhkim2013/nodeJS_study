/**
 * Created by almond on 16. 2. 17..
 */
console.time("alpha");

var output = 1;
for(var i = 1; i <= 10; i++) {
    output *= i;
}
console.log('Result:', output);

console.timeEnd("alpha");