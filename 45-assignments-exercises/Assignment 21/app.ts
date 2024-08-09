//21. They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

const student: {  //stored object with types in variable
  name: string;
  quarter: number;
  isRegular: boolean;
  age: number;
} = { name: "Ayan Alam", quarter: 1, isRegular: true, age: 18 };


console.log(student); //prints object to console

console.log(student.name);  //prints name from object to console

const sentence: string = `My name is ${student.name} and I am ${student.age} years old.`; // stored sentence in variable

console.log(sentence); // prints sentence to console
