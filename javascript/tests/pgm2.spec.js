const main = require("../main/pgm2.js");
const assert = require("assert");

assert.deepStrictEqual( main(["a","B","c"],[1,2,3]), ["a",1,"B",2,"c",3] );
