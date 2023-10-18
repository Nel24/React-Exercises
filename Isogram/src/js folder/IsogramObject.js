//match should only be used for a string or words


function isIsogram(str) {
  str = str.toLowerCase();
  const seenLetters = {};
  for (const letter of str) {
    if (letter.match(/[a-z]/)) {
      if (seenLetters[letter]) {
        return false;
      }
      seenLetters[letter] = true;
    }
  }
  return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("aba")); // Output: false
console.log(isIsogram("moOse")); // Output: false
