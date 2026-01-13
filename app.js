const variable = require('./basic/variable');
const datatypes = require('./basic/datatypes');
const condition = require('./basic/condition');

console.log("variables: ",variable.a,variable.b,variable.c);
console.log("\nData Types: ",datatypes.nametype,datatypes.numtype,datatypes.convertednum,datatypes.sym);
console.log('\n condition: ',condition.cp(70),condition.grade(67),condition.getresult(45));
