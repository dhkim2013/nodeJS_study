/**
 * Created by almond on 16. 2. 24..
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://dhkim2015:dh990218@ds015398.mongolab.com:15398/nodejs_web');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    var kittySchema = mongoose.Schema({
        name: String
    })

    var Kitten = mongoose.model('Kitten', kittySchema);
    var fluffy = new Kitten({
        name: 'fluffy'
    })

    kittySchema.method.speak = function () {
        var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
        console.log(greeting);
        fluffy.speak();
    }

    fluffy.save(function (err, fluffy) {
        if (err) {
            throw err;
        }
    })

    Kitten.find({name: /^fluff/}, function (err, kittens) {
        if (err) {
            throw err;
        }
        db.close();
        console.log('Kitten : ' + kittens);
    })

})