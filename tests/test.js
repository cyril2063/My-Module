var myMod = require('../index.js');
var p1 = {x:0, y:0};
var p2 = {x:5, y:5};
var dist1 = myMod.dist(p1, p2);
console.log("Distance between: ", p1, " and ", p2, " is:", dist1);