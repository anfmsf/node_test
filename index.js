/**
 * Created by fequebal on 3/23/19.
 */

var express = require('express')
var app = express()
var fs = require('fs');

function  test(err, data) {
    if(err) {
        console.log('it is error');
        console.log(err);
    }
    else {
        console.log('it is pass');
        console.log(data);
    }

}

app.get('/test', function (req, res) {
    //console.log(req.params.directory);
    fs.readFile('demofile2.html', function(err, data) {
        if(err) {
            return res.send(400, {code:0, reason: err.message})
        }
        var list = [data.toString()];
        res.send(200, {directoryList: list});
    });


})

function test2(id, callback) {
    fs.readFile('demofile1.html', function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(data.toString());
        }
    });
    return callback(null, id);
}

function test3(data) {
    console.log(data);
}

test2(2,test);

// test2(2, function (err, data) {
//     if(err) {
//         console.log('it is error');
//         console.log(err);
//     }
//     else {
//         console.log('it is pass');
//         console.log(data);
//     }
//
// });
test3('faizan');

app.listen(3000)


