//16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//   bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

const guestList: string[] = ["Faraz", "Ashar", "Daniyal"];
// stored names of friends in a array that I will invite to dinner

let message1: string = `Hello ${guestList[0]}, would you like to join us for dinner, please join us ${guestList[1]} and ${guestList[2]} will also be there.`;
// stored first name and message in a variable

let message2: string = `Hello ${guestList[1]}, would you like to join us for dinner, please join us ${guestList[0]} and ${guestList[2]} will also be there."`;
// stored second name and message in a variable

let message3: string = `Hello ${guestList[2]}, would you like to join us for dinner, please join us ${guestList[0]} and ${guestList[1]} will also be there.`;
// stored third name and message in a variable

console.log(message1); //print first name and message to console
console.log(message2); //print second name and message to console
console.log(message3); //print third name and message to console

const notComingGuest: string = guestList[0];
// stored name of guest who can’t make it in a variable

const guestMessage: string = `Sorry ${guestList[0]}, you can't make it.`;
// stored first name and message in a variable

console.log(guestMessage); //print first name and message to console

guestList[0] = "Hamza";
//replacing the name of the guest who can’t make it with
// the name of the new person I am inviting.

message1 = `Hello ${guestList[0]}, would you like to join us for dinner, ${notComingGuest} is not coming; please join us ${guestList[1]} and ${guestList[2]} will also be there.`;
// stored modified first name and message in a variable

message2 = `Hello ${guestList[1]}, would you like to join us for dinner, ${notComingGuest} is not coming; please join us ${guestList[0]} and ${guestList[2]} will also be there."`;
// stored modified second name and message in a variable

message3 = `Hello ${guestList[2]}, would you like to join us for dinner, ${notComingGuest} is not coming; please join us ${guestList[0]} and ${guestList[1]} will also be there.`;
// stored modified third name and message in a variable

console.log(message1); //print modified first name and message to console
console.log(message2); //print modified second name and message to console
console.log(message3); //print modified third name and message to console

const newMessage: string = `${guestList}, I just found out a bigger dinning table, so I am inviting more guests for dinner.`;
// stored new message in a variable

console.log(newMessage); //print new message to console

guestList.unshift("Iftikhar"); // adding new name to the beginning of the array
guestList.splice(2, 0, "Krish"); // adding new name in the middle of the array
guestList.push("Faizan"); // adding new name to the end of the array

let myNewGuestsInvitation1: string = `Hello ${guestList[0]}, would you like to join us for dinner, please join us tonight.`;
// stored new invitation message in a variable

let myNewGuestsInvitation2: string = `Hello ${guestList[1]}, would you like to join us for dinner, please join us tonight.`;
// stored new invitation message in a variable

let myNewGuestsInvitation3: string = `Hello ${guestList[2]}, would you like to join us for dinner, please join us tonight.`;
// stored new invitation message in a variable

let myNewGuestsInvitation4: string = `Hello ${guestList[3]}, would you like to join us for dinner, please join us tonight.`;
// stored new invitation message in a variable

let myNewGuestsInvitation5: string = `Hello ${guestList[4]}, would you like to join us for dinner, please join us tonight.`;
// stored new invitation message in a variable

let myNewGuestsInvitation6: string = `Hello ${guestList[5]}, would you like to join us for dinner, please join us tonight.`;
// stored new invitation message in a variable

console.log(`${myNewGuestsInvitation1}`); //print new invitation message to console

console.log(`${myNewGuestsInvitation2}`); //print new invitation message to console

console.log(`${myNewGuestsInvitation3}`); //print new invitation message to console

console.log(`${myNewGuestsInvitation4}`); //print new invitation message to console

console.log(`${myNewGuestsInvitation5}`); //print new invitation message to console

console.log(`${myNewGuestsInvitation6}`); //print new invitation message to console
