# ds4js
NPM package for data structure

command to Install :
```js
npm install ds4js --save
```
Data Structure:

* __`Stack`__ 

Example:
```js
const dataStructure = require('ds4js');

var stack = dataStructure.stack();

stack.push("hello");
var element = stack.peek(); // hello
var length = stack.length(); // 1
var isEmpty = stack.isEmpty(); // false
var element = stack.pop(); // hello
var length = stack.length(); // 0
var isEmpty = stack.isEmpty(); // true
```