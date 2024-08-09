// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


const userName: string[] = ["Admin", "Ayan", "Daniyal", "Alam", "Ashar"]; //stored user names in an array

for (let i = 0; i < userName.length; i++) { //looping through the array
    if (userName.includes(userName[i])) { // checking if the username is in the array
            if (userName[i] == "Admin") {  //checking if the username is admin
                console.log("Hello Admin, would you like to see a status report?"); // if the username is admin
            }else{
                console.log(`Hello ${userName[i]}, thank you for logging in again.`);// if the username is not admin
            }
    } else { console.log(`Invalid User Name : ${userName[i]}`); } // if the username is not in the array

}

