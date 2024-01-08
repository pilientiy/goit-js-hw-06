'use strict';

class StringBuilder {
  #newValue;

  constructor(initialValue) {
    this.#newValue = initialValue;
  }

  getValue() {
    return this.#newValue;
  }

  padStart(str) {
    this.#newValue = str + this.#newValue;
  }

  padEnd(str) {
    this.#newValue = this.#newValue + str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

console.log('---');
