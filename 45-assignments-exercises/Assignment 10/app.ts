// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Program 1

const personName: string = "\t   Ayan Alam     \n    ";
// store the person's name with whitespace

console.log(`Name with whitespace:, ${personName}`);
// print the person's name including whitespace to the console

const strippedName: string = personName.trim();
// Remove surrounding whitespace using trim()

console.log("Name without whitespace:", strippedName);
// print the stripped name to the console

// Program 2

const favoriteNumber: number = 2;
// stored favorite number in a variable

const myMessage: string = `${favoriteNumber} is my favorite number.`;
// reveals favorite number in this variable

console.log(myMessage);
// prints message along with favorite number in console
