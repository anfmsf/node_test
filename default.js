/**
 * Created by fequebal on 4/3/19.
 */

var url = require('url');
var add = 'http://localhost:8080/default.js?year=2017&month=february';
var q = url.parse(add, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);


