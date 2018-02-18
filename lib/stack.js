'use strict';

class Stack {

    constructor() {
        this.elements = [];
        this.top = 0;
    }

    length() {
        return this.top;
    }

    isEmpty() {
        return this.top === 0;
    }

    push(element) {
        this.elements[this.top++] = element;
    }

    pop() {
        if (!this.isEmpty()) {
            return this.elements[--this.top];
        } else {
            return null;
        }
    }

    peek() {
        return !this.isEmpty() ? this.elements[this.top - 1] : null;
    }

    clear() {
        this.elements = [];
        this.top = 0;
    }

}

module.exports = Stack;