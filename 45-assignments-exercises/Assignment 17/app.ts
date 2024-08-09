// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//   a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//  of your program.

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

let newMessage: string = `${guestList}, I just found out a bigger dinning table, so I am inviting more guests for dinner.`;
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

newMessage = `${guestList}, I just found out that the bigger dinning table is not arriving today, so I can only invite 2 guests for dinner.`;
// update new message

console.log(newMessage); //print new message to console

const notInvitingGuest1 = guestList.pop(); //removing last name from the array and storing it in a variable
const notInvitingGuest2 = guestList.pop(); //removing last name from the array and storing it in a variable
const notInvitingGuest3 = guestList.pop(); //removing last name from the array and storing it in a variable
const notInvitingGuest4 = guestList.pop(); //removing last name from the array and storing it in a variable

const apologyMessage1: string = `Sorry ${notInvitingGuest1}, You are not invited to dinner, because the dinning table didn’t arrive today.`;
// stored message in a variable

const apologyMessage2: string = `Sorry ${notInvitingGuest2}, You are not invited to dinner, because the dinning table didn’t arrive today.`;
// stored message in a variable

const apologyMessage3: string = `Sorry ${notInvitingGuest3}, You are not invited to dinner, because the dinning table didn’t arrive today.`;
// stored message in a variable

const apologyMessage4: string = `Sorry ${notInvitingGuest4}, You are not invited to dinner, because the dinning table didn’t arrive today.`;
// stored message in a variable

console.log(apologyMessage1); //print message to console
console.log(apologyMessage2); //print message to console
console.log(apologyMessage3); //print message to console
console.log(apologyMessage4); //print message to console

const invitedPerson1 = `Hello ${guestList[0]}, you are still invited to dinner.`;
// stored message in a variable

const invitedPerson2 = `Hello ${guestList[1]}, you are still invited to dinner.`;
// stored message in a variable

console.log(invitedPerson1); //print message to console
console.log(invitedPerson2); //print message to console

const secondLastName = guestList.pop(); //removing second last name from the array and storing it in a variable
const lastName = guestList.pop(); //removing last name from the array and storing it in a variable

console.log(guestList); //print empty array to console
