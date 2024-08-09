// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.

type CarOption = readonly [string, any]; //type alias for CarOption
type Car = {
  //type alias for Car
  manufacturer: string;
  model: string;
  [key: string]: any;
};

function createCar(
  manufacturer: string,
  model: string,
  ...options: CarOption[]
): Car {
  //function to create car
  let car: Car = {
    //type of car
    manufacturer,
    model,
  };

  for (let i = 0; i < options.length; i++) {
    //looping through options
    const [key, value] = options[i]; // storing key and value in options
    car[key] = value; // adding key and value in car
  }

  return car; //returning car
}

const myCar = createCar(
  "Toyota",
  "Yaris",
  ["color", "Black"],
  ["sunroof", true]
); //calling function with required information

console.log(myCar); //printing car
