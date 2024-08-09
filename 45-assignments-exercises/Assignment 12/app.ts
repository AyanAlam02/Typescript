//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const friendsNames: string[] = ["Iftikhar", "Krish", "Ashar", "Daniyal"]; // stored names of friends in a array

const name1: string = friendsNames[0]; // stored first name in a variable

const name2: string = friendsNames[1]; // stored second name in a variable

const name3: string = friendsNames[2]; // stored third name in a variable

const name4: string = friendsNames[3]; // stored fourth name in a variable

const myMessage1: string = `Hello ${name1}, would you like to learn some typescript?`; // stored first name and message in a variable

const myMessage2: string = `Hello ${name2}, would you like to learn some typescript?`; // stored second name and message in a variable

const myMessage3: string = `Hello ${name3}, would you like to learn some typescript?`; // stored third name and message in a variable

const myMessage4: string = `Hello ${name4}, would you like to learn some typescript?`; // stored fourth name and message in a variable

console.log(myMessage1); //print first name and message to console
console.log(myMessage2); //print second name and message to console
console.log(myMessage3); //print third name and message to console
console.log(myMessage4); //print fourth name and message to console
