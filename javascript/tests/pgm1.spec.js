const { for_sum, while_sum, recursion_sum } = require("../main/pgm1.js");

console.assert( for_sum([1,2,3,4,5]) === 15, "Write three functions : For loop" );
console.assert( while_sum([1,2,3,4,5]) === 15, "Write three functions : While loop" );
console.assert( recursion_sum([1,2,3,4,5]) === 15, "Write three functions : Recursion" );
