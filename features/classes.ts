class Vehicle {
  // color: string;
  // constructor(color) {
  //   this.color = color;
  // }

  // constructor(private color: string) {}

  constructor(public color: string) {}

  drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("chugga chugga");
  }
}

const vehicle = new Vehicle("red");
const vehicle2 = new Vehicle("orange");
vehicle.drive();
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }

  private start(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.start();
    this.honk();
  }
}

const caar = new Car("blue");

caar.startDriving();
caar.drive();
