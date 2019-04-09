const path = require('path');

//Base File Name
console.log(path.basename(__filename));

//Directory name
console.log(__dirname);

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatenate paths
console.log(path.join(__dirname,'test', 'hello.html'));
