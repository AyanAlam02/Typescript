//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

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

const guestMessage: string = `${notComingGuest} can't make it to dinner.`;
// stored guest name and message in a variable

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
