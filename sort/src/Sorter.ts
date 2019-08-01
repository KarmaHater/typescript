import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  constructor(public collection: NumbersCollection) {}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        const leftHand = this.collection[i];
        this.collection[i] = this.collection[j + 1];
        this.collection[j + 1] = leftHand;
      }
    }
  }
}
const sorter = new Sorter([10, 3, -1]);

console.log(sorter);
cjrhcf