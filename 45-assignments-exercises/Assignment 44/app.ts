// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.

function make_sandwich(...items: string[]) {
  //defining function with rest parameter
  const sandwich = `The items in the sandwich are: ${items}.`; //storing output
  return sandwich; //returning output
}

const sandwich1 = make_sandwich(
  "Bread",
  "Grilled Chicken",
  "Cheese",
  "Mayonnaise",
  "Ketchup"
); // calling function with arguments and storing it in a variable
const sandwich2 = make_sandwich(
  "Bread",
  "Kebab", 
  "Chutney", 
  "Ketchup"); // calling function with arguments and storing it in a variable
const sandwich3 = make_sandwich(
  "Bread",
  "Fried Chicken",
  "Cheese",
  "lettuce",
  "Cucumber"
); // calling function with arguments and storing it in a variable

console.log(sandwich1); // printing output
console.log(sandwich2); // printing output
console.log(sandwich3); // printing output
