// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.

const countries: string[] = [
  "Pakistan",
  "Italy",
  "France",
  "China",
  "Singapore",
  "Australia",
  "Germany",
  "USA",
  "England",
  "Japan",
  "Spain",
  "New Zealand",
];   // stored names of countries in a array

console.log("List of Countries:"); // prints to console

for (let index = 0; index < countries.length; index++) {  // for loop to print list of countries with numbering
  const element = `${index + 1}: ${countries[index]}`;
  console.log(element);
}
