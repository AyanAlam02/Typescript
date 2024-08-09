// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

function describe_city(city: string, country: string = "Pakistan") {
  //default country is Pakistan in function
  const place: string = `${city} is in ${country}.`; //storing output
  return place; //returning output
}

const destination1: string = describe_city("Lahore"); //calling function with 1 argument
const destination2: string = describe_city("Islamabad"); //calling function with 1 argument
const destination3: string = describe_city("Texas", "USA"); //calling function with 2 arguments

console.log(destination1); //printing output
console.log(destination2); //printing output
console.log(destination3); //printing output
