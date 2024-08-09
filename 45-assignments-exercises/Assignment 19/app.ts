// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Using Exercise 14

const guestList = ["Faraz", "Ashar", "Daniyal"];
// stored names of friends in a array that I will invite to dinner

const message1 = (`Hello ${guestList[0]}, would you like to join us for dinner, please join us ${guestList[1]} and ${guestList[2]} will also be there.`)
// stored first name and message in a variable

const message2 = (`Hello ${guestList[1]}, would you like to join us for dinner, please join us ${guestList[0]} and ${guestList[2]} will also be there."`)
// stored second name and message in a variable

const message3 = (`Hello ${guestList[2]}, would yoy like to join us for dinner, please join us ${guestList[0]} and ${guestList[1]} will also be there.`)
// stored third name and message in a variable

console.log(message1); //print first name and message to console
console.log(message2); //print second name and message to console
console.log(message3); //print third name and message to console


const totalGuests = guestList.length
// stored total number of people invited in a variable

const message4 = (`Total number of guests invited: ${totalGuests}`)
// stored total number of people invited in a variable with the message

console.log(message4)
// print total number of people invited