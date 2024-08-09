//14. Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

const guestList = ["Faraz", "Ashar", "Daniyal"];
// stored names of friends in a array that I will invite to dinner

const message1 = `Hello ${guestList[0]}, would you like to join us for dinner, please join us ${guestList[1]} and ${guestList[2]} will also be there.`;
// stored first name and message in a variable

const message2 = `Hello ${guestList[1]}, would you like to join us for dinner, please join us ${guestList[0]} and ${guestList[2]} will also be there."`;
// stored second name and message in a variable

const message3 = `Hello ${guestList[2]}, would yoy like to join us for dinner, please join us ${guestList[0]} and ${guestList[1]} will also be there.`;
// stored third name and message in a variable

console.log(message1); //print first name and message to console
console.log(message2); //print second name and message to console
console.log(message3); //print third name and message to console
