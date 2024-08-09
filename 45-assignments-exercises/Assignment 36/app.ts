// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function make_shirt(size: string, message: string) {
  // function with two parameters
  const product: string = `The size of the shirt is: ${size}; and the message to be printed on it is : ${message}.`; // storing output
  return product; // returning output
}

const myShirt: string = make_shirt("Extra Large", "I am a programmer"); // calling function with arguments

console.log(myShirt); // printing output
