// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

const magicianNames: string[] = ["Harry", "Hermione", "Ron"]; // stored names of magicians in an array

function showMagicians(magicians: string[]): void {
  // function to print names of magicians
  for (let i: number = 0; i < magicians.length; i++) {
    // loop to print names of magicians
    console.log(magicians[i]); // print names of magicians
  }
}

function makeGreat(magicians: string[]): string[] {
  // function to add "the Great" to each magician's name
  const greatMagicians = [...magicians]; // create a copy of the original array
  for (let i: number = 0; i < greatMagicians.length; i++) {
    // loop to add "the Great" to each magician's name on the copied array
    greatMagicians[i] = "The Great " + greatMagicians[i]; // add "the Great" to each magician's name
  }
  return greatMagicians; // return the modified array
}

const greatMagicianNames = makeGreat(magicianNames); // create a new array with "the Great" added to each magician's name

showMagicians(magicianNames); // print original list of magicians
showMagicians(greatMagicianNames); // print modified list of magicians
