let myName : string = "Ayan Alam"
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())
myName = myName.charAt(0).toUpperCase() + myName.slice(1, 5).toLowerCase() + myName.charAt(5).toUpperCase() + myName.slice(6).toLowerCase()
console.log(myName)