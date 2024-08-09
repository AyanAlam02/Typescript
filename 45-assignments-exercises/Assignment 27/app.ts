// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

const alien_color1: string = "green"; //stored alien color in a variable

if (alien_color1 == "green") {
  console.log("You just earned 5 points"); //if statement
} else if (alien_color1 == "yellow") {
  console.log("You just earned 10 points"); //else if statement
} else if (alien_color1 == "red") {
  console.log("You just earned 15 points"); //else if statement
} else {
  console.log("The alien color is invalid");
}

const alien_color2: string = "yellow"; //stored second alien color in a variable

if (alien_color2 == "green") {
  console.log("You just earned 5 points"); //if statement
} else if (alien_color2 == "yellow") {
  console.log("You just earned 10 points"); //else if statement
} else if (alien_color2 == "red") {
  console.log("You just earned 15 points"); //else if statement
} else {
  console.log("The alien color is invalid");
}

const alien_color3: string = "red"; //stored third alien color in a variable

if (alien_color3 == "green") {
  console.log("You just earned 5 points"); //if statement
} else if (alien_color3 == "yellow") {
  console.log("You just earned 10 points"); //else if statement
} else if (alien_color3 == "red") {
  console.log("You just earned 15 points"); //else if statement
} else {
  console.log("The alien color is invalid");
}
