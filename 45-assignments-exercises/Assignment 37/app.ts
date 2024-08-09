// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
) {
  // function with two parameters
  const product: string = `The size of the shirt is: ${size}; and the message to be printed on it is : ${message}.`; // storing output
  return product; // returning output
}

const myShirt1: string = make_shirt(); // calling function without arguments

const myShirt2: string = make_shirt("Medium"); // calling function with one argument

const myShirt3: string = make_shirt("Extra Large", "I am a programmer"); // calling function with two arguments

console.log(myShirt1); // printing output
console.log(myShirt2); // printing output
console.log(myShirt3); // printing output
