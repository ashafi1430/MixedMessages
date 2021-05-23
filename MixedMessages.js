//Joke of the day generator
// - run program to output a random joke from a static list of jokes.

let jokes = ["Joke 0", "Joke 1","Joke 2","Joke 3", "Joke 4", "Joke 5", "Joke 6", "Joke 7", "Joke 8", "Joke 9", "Joke 10", "Joke 11", "Joke 12"];

let randomNumber = Math.floor(Math.random() * jokes.length);

console.log(`Print a random joke: ${jokes[randomNumber]}`);


