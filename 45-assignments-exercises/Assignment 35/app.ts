// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.

// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

const animals = ["Cat", "Parrot", "Rabbit"]; // stored names of animals in an array

for (let i = 0; i < animals.length; i++) {
  // looping through the array
  console.log(animals[i]); // printing the name of each animal
}

for (let i = 0; i < animals.length; i++) {
  // looping through the array
  console.log(`It would be great to have ${animals[i]} as a pet.`); // printing the name of each animal with a statement
}

const common = "Any of these animals would make a great pet!"; // stored sentence in a variable

console.log(common); // printing the sentence
