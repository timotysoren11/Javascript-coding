// finding the longest word in a sentences

/*
1. split the sentence into array of words
2. initialize a variable to store the longest word
3. Loop through each word
*/

function longestWord(sentence) {
  const words = sentence.trim().split(' '); // split by spaces
  let longest_word = "";

  for (let word of words) {
    if (word.length > longest_word.length) { // compare word lengths
      longest_word = word;
    }
  }

  return longest_word;
}

const sentence = "This is not an Apple";
console.log(longestWord(sentence)); // Output should be "Apple"


