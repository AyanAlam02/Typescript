// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

function make_album(artist: string, title: string, tracks?: number) {
  //function to make album
  const album: { artist: string; title: string; tracks?: number } = {
    //object to store album
    artist,
    title,
  };

  if (tracks !== undefined) {
    // if tracks is not undefined then we take its value
    album.tracks = tracks;
  }

  return album; //returning album
}

const album1 = make_album("Ayan Alam", "TypeScript Music", 45); // calling function and storing it in a variable
const album2 = make_album("Daniyal", "FSC Version 2", 2); // calling function and storing it in a variable
const album3 = make_album("Ashar", "Cricket Fever 2"); // calling function and storing it in a variable

console.log(album1); // printing the object
console.log(album2); // printing the object
console.log(album3); // printing the object
