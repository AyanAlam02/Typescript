//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName: string = "Ayan Alam"; // stored person's name in a variable

const a: string = personName.toLowerCase(); // changes person's name to lower case

const b: string = personName.toUpperCase(); // changes person's name to upper case

function toTitleCase(input: string): string {
  // function to convert the persons name to title case
  return input
    .split(" ") //splits the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // changes the first letter of each word to uppercase and the rest to lowercase
    .join(" "); // joins the words back into a string
}

const c: string = toTitleCase(personName); // changes person's name to title case

console.log(`Lower Case : ${a}`); //print lower case name
console.log(`Upper Case : ${b}`); //print upper case name
console.log(`Title Case : ${c}`); //print title case name
