let apple: number = 5;
apple = 10;

let speed: string = "fast";
speed = "slow";

let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let node: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];
let bool: boolean[] = [true, false];

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Do not have to write any of these annotations because they are inferences.
// Inference if when type scripts guesses the type (rely on this a lot)

// When to use Annotations

// 1) When a functions returns a ANY type
const json = '{"x": 10, "y": "34"}';
const coordinates: { x: number; y: number } = JSON.parse(json); // return any
console.log(coordinates);

// 2) Delayed Init it later
const words = ["red", "green", " blue"];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
  if (words[index] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let number = [-10, -1, -12];
let numberAboveZero: boolean | number = false;
for (let index = 0; index < number.length; index++) {
  numberAboveZero = number[index];
}

