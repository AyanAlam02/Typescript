// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

const magicianNames: string[] = ["Harry", "Hermoine", "Ron"]; // stored names of magicians in an array
function showMagicians(magicians: string[]): void {
  // function to show names of magicians
  for (let i: number = 0; i < magicians.length; i++) {
    // loop to print names of magicians
    console.log(magicians[i]); // printing names of magicians
  }
}

function makeGreat(magicians: string[]): void {
  // function to add "the Great" to each magician's name
  for (let i: number = 0; i < magicians.length; i++) {
    // loop to add "the Great" to each magician's name
    magicians[i] = "The Great " + magicians[i];
  }
}

makeGreat(magicianNames); // calling function to modify the array

showMagicians(magicianNames); // calling function to show modified list
