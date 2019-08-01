const profile = {
  name: "andra",
  age: 32,
  coords: {
    x: 0,
    y: 5
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { x, y }
}: { coords: { x: number; y: number } } = profile;


