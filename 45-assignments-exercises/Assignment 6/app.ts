// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


const personName: string = "\n \n \t Ayan Alam     \t    ";
// store the person's name with whitespace

console.log(`Name with whitespace:, ${personName}`);
// print the person's name including whitespace to the console

const strippedName: string = personName.trim();
// Remove surrounding whitespace using trim()

console.log("Name without whitespace:", strippedName);
// print the stripped name to the console
