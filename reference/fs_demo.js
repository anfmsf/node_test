/**
 * Created by fequebal on 4/3/19.
 */
const fs = require('fs');
const path = require('path');

//Create directory

//fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if(err) throw err;
    console.log('folder created ...');
});


//Create and Write on file
fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'Hello my world', function(err){

    if (err) throw err;
    console.log('folder written to ...');
}
);
