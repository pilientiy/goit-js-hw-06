'use strict';

class Storage {
  constructor(items) {
    this.newItems = items;
  }

  getItems() {
    return this.newItems;
  }

  addItem(newItem) {
    this.newItems.push(newItem);
  }

  removeItem(itemToRemove) {
    const indexToRemove = this.newItems.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
      this.newItems.splice(indexToRemove, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



console.log('---');
