const carMarkers = ["ford", "chevy"];
const carsByMake: string[][] = [["f150"], ["f150"]];

// help with inference when extracting values

const car = carMarkers[0];
const carTwo = carMarkers.pop();

// carMarkers.push(1);

carMarkers.map((car: string) => car.toUpperCase());

// Flexible Types

const date: (string | Date)[] = [new Date()];

date.push("2030-10-10");
date.push(new Date());
// date.push(100);

const drinks = {
  color: "brown",
  sugar: 40,
  carbonated: true
};

type Drink = [string, boolean, number];
// Tuple
const coke: Drink = ["brown", true, 40];
const kambucha: Drink = ["brown", true, 40];

//Tuple
const carSpec: [number, number] = [400, 3354];
// Objects are better
const carSpec2 = {
  horsePower: 400,
};
