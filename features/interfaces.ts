interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(name: string): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(name: string): string {
    return name;
  }
};
// could have more properties but needs to at least have the properties on the interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.summary(vehicle.name));
};

printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}
const report = {
  name: "Andra",
  summary(): string {
    return this.name;
  }
};

const printSummary = (item: Reportable): string => item.summary();

console.log(printSummary(report));

const drink = {
  color: "red",
  carbonated: true,
  sugar: 26,
  summary(): string {
    return this.sugar;
  }
};

const printSodaSummary = (item: Reportable): string => report.summary();

console.log(printSodaSummary(drink));
