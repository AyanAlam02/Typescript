// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

const userName: string[] = ["Admin", "Ayan", "Daniyal", "Alam", "Ashar"]; //stored user names in an array

userName.pop(); //removing the last element from the array
userName.pop(); //removing the last element from the array
userName.pop(); //removing the last element from the array
userName.pop(); //removing the last element from the array
userName.pop(); //removing the last element from the array

// now all elements in the array are removed

if (userName.length == 0) {
  //checking if the list is empty
  console.log("We need to find some users!"); // if the list is empty
} else {
  // if the list is not empty
  for (let i = 0; i < userName.length; i++) {
    //looping through the array
      if (userName[i] == "Admin") {
        //checking if the username is admin
        console.log("Hello Admin, would you like to see a status report?"); // if the username is admin
      } else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`); // if the username is not admin
      }
  }
}
