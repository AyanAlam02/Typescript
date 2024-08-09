// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

const magicianNames: string[] = ["Harry", "Hermoine", "Ron"]; // stored names of magicians in an array
function showMagicians(magicians: string[]): void {
  // function to show names of magicians
  for (let i: number = 0; i < magicians.length; i++) {
    // loop to print names of magicians
    console.log(magicians[i]); // printing names of magicians
  }
}

showMagicians(magicianNames); // calling function
