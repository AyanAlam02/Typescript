// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
// the if block should print a statement,
// such as You really like bananas!

const favoriteFruits: string[] = ["Strawberry", "Pomegranate", "Plum"];
// stored names of fruits in an array

if (favoriteFruits.includes("Strawberry")) {
  //checks if fruit is in array if it is it prints statement
  console.log("I really like Strawberry!");
} else {
  console.log("I don't like Strawberry");
}

if (favoriteFruits.includes("Banana")) {
  //checks if fruit is in array if it is it prints statement
  console.log("I really like Banana!");
} else {
  console.log("I don't like Banana");
}

if (favoriteFruits.includes("Plum")) {
  //checks if fruit is in array if it is it prints statement
  console.log("I really like Plum!");
} else {
  console.log("I don't like Plum");
}

if (favoriteFruits.includes("Apple")) {
  //checks if fruit is in array if it is it prints statement
  console.log("I really like Apple!");
} else {
  console.log("I don't like Apple");
}

if (favoriteFruits.includes("Pomegranate")) {
  //checks if fruit is in array if it is it prints statement
  console.log("I really like Pomegranate!");
} else {
  console.log("I don't like Pomegranate");
}
