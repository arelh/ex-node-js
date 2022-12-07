//!1.What is the difference between import and require?

//require-It can be called at any time and place in the program.
//import-It can’t be called conditionally, it always run in the beginning of the file.

//require- If you want to use require module then you have to save file with ‘.js’ extension.
//import- If you want to use import module then you have to save file with ‘.mjs’ extension.

//require- You can directly run the code with require statement.
//import- To run a program containing import statement you have to use experimental module feature flag.

//! How can you enable using the import syntax using node js.
// 1. we can name the file .mjs instead of .js
// 2.  or we can add "type" : "module" in the package.json

//! Give 2 node.js environment variables that are not available  when using the import syntax.
// 1. __dirname
// 2. __filename

// const showCarName = require("./car"); //pass the car js in app

// showCarName("kia");

// console.log("hhh");

const add = require("./car");
const sum = add(4, -2);
console.log(sum);

const getNotes = require("./note");
console.log(getNotes());

const {shuffle,random}= require("lodash")
const abc_ar = ["a", "b", "c", "d"];
const shuffle_arr=shuffle(abc_ar);
const rnd=random(4,10)

console.log(abc_ar);
console.log(shuffle_arr);
console.log(rnd);
