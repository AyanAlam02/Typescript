// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_country(city: string, country: string) {
  //default country is Pakistan in function
  const place: string = `"${city}, ${country}"`; //storing output
  return place; //returning output
}

const place1: string = city_country("London", "UK"); //calling function with arguments
const place2: string = city_country("Islamabad", "Pakistan"); //calling function with arguments
const place3: string = city_country("Texas", "USA"); //calling function with arguments

console.log(place1); //printing output
console.log(place2); //printing output
console.log(place3); //printing output
