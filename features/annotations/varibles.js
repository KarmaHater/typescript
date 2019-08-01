var apple = 5;
apple = 10;
var speed = "fast";
speed = "slow";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
var node = new Date();
// Array
var colors = ["red", "green", "blue"];
var numbers = [1, 2, 3];
var bool = [true, false];
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20
};
// Function
var logNumber = function (i) {
    console.log(i);
};
// Do not have to write any of these annotations because they are inferences.
// Inference if when type scripts guesses the type (rely on this a lot)
// When to use Annotations
// 1) When a functions returns a ANY type
var json = '{"x": 10, "y": "34"}';
var coordinates = JSON.parse(json); // return any
console.log(coordinates);
// 2) Delayed Init it later
var words = ["red", "green", " blue"];
var foundWord;
for (var index = 0; index < words.length; index++) {
    if (words[index] === "green") {
        foundWord = true;
    }
}
// 3) Variable whose type cannot be inferred correctly
var number = [-10, -1, -12];
var numberAboveZero = false;
for (var index = 0; index < number.length; index++) {
    numberAboveZero = number[index];
}
