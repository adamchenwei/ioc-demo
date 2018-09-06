export default class Pocket {
  constructor() {
    this.bag = []
  }

  add(item) {
    console.log(this.bag);
    this.bag.push(item)
  }

  get() {
    return this.bag;
  }

  remove() {
    this.bag.pop();
    console.log(this.bag);
  }
}