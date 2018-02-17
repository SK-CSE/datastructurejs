'use strict';

const lib = require('./lib');

class DataStructure {

    stack() {
        return new lib.Stack();
    }
}

module.exports = new DataStructure();