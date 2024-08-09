// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// string equality check
const myName: string = "Ayan"; //stored name in a variable
console.log("Is myName == 'Ayan'? I predict True."); //predicted outcome
console.log(myName == "Ayan"); //actual outcome

// string inequality check
console.log("Is myName != 'Ayan'? I predict False."); //predicted outcome
console.log(myName != "Ayan"); //actual outcome

// used lower case function
const myName2 = myName.toLowerCase(); // changed name to lower case and stored in a new variable

// string equality check (lower case function)
console.log("Is myName2 != 'Ayan'? I predict True."); //predicted outcome
console.log(myName2 != "Ayan"); //actual outcome

// string inequality check (lower case function)
console.log("Is myName2 == 'Ayan'? I predict False."); //predicted outcome
console.log(myName2 == "Ayan"); //actual outcome

// numerical equality check
const myAge: number = 18.5; //stored age in a variable
console.log("Is myAge == 18.5? I predict True."); //predicted outcome
console.log(myAge == 18.5); //actual outcome

// numerical inequality check
console.log("Is myAge != 18.5? I predict False."); //predicted outcome
console.log(myAge != 18.5); //actual outcome

// numerical greater than check
console.log("Is myAge > 20? I predict False."); //predicted outcome
console.log(myAge > 20); //actual outcome

// numerical less than check
console.log("Is myAge < 20? I predict True."); //predicted outcome
console.log(myAge < 20); //actual outcome

// numerical greater than or equal to check
console.log("Is myAge <= 18.5? I predict True."); //predicted outcome
console.log(myAge == 18.5); //actual outcome

// numerical less than or equal to check
console.log("Is myAge >= 18.5? I predict True."); //predicted outcome
console.log(myAge == 18.5); //actual outcome

// test using logical "and" operator
console.log("Is myAge == 18.5? and myName == 'Ayan'? I predict True."); //predicted outcome
console.log(myAge == 18.5 && myName == "Ayan"); //actual outcome

console.log("Is myAge == 18.5? and myName == 'Alam'? I predict False."); //predicted outcome
console.log(myAge == 18.5 && myName == "Alam"); //actual outcome

// test using logical "or" operator
console.log("Is myAge == 18.5? or myName == 'Alam'? I predict True."); //predicted outcome
console.log(myAge == 18.5 || myName == "Alam"); //actual outcome

console.log("Is myAge == 18.5? or myName == 'Alam'? I predict False."); //predicted outcome
console.log(myAge == 15 || myName == "Alam"); //actual outcome

// test whether an item is in a array
const names: string[] = ["Ayan", "Ashar", "Daniyal"]; //stored names in an array
const findName: boolean = names.includes("Ayan");
console.log("The name is in the array:", findName);

// test whether an item is not in a array
const findName2: boolean = !names.includes("Alam");
console.log("The name is not in the array:", findName2);
