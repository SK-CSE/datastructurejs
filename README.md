# datastructurejs
NPM package for data structure

command to Install :
```js
npm install datastructurejs --save
```
Data Structure:

* __`Stack`__ 

Example:
```js
const dataStructure = require('datastructurejs');

var stack = dataStructure.stack();

stack.push("hello");
let element = stack.peek(); // hello
var length = stack.length(); // 1
let isEmpty = stack.isEmpty(); // false
let element = stack.pop(); // hello
var length = stack.length(); // 0
var isEmpty = stack.isEmpty(); // true
```