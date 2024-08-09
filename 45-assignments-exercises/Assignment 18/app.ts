// //18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
//   order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const places: string[] = [
  "Germany",
  "Italy",
  "USA",
  "England",
  "Japan",
  "Spain",
];
// stored names of places in a array

console.log(places); //print array to console

const alphabeticalOrder: string[] = [...places].sort();
// stored array in alphabetical order

console.log(alphabeticalOrder); //print array in alphabetical order to console

console.log(places); //print array to console

const reverseAlphabeticalOrder: string[] = [...alphabeticalOrder].reverse();
// stored array in reverse alphabetical order

console.log(reverseAlphabeticalOrder); //print array in reverse alphabetical order to console

console.log(places); //print original array to console

const reverse1: string[] = places.reverse();
// stored original array in reverse order

console.log(reverse1); //print original array in reverse order to console

const reverse2: string[] = places.reverse();
// stored original array in reverse order

console.log(reverse2); //print original array in reverse order to console again

const alphabeticalOrder2: string[] = places.sort();
// stored original array in alphabetical order

console.log(alphabeticalOrder2); //print original array in alphabetical order to console

const reverseAlphabeticalOrder2: string[] = places.reverse();
// stored original array in reverse alphabetical order

console.log(reverseAlphabeticalOrder2); //print original array in reverse alphabetical order to console
