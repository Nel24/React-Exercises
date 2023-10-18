function isIsogram(str) {
  str = str.toLowerCase();
  const seenLetters = {};
  for (const letter of str) {
    if (/[a-z]/.test(letter)) {
      // validation that all letters are a valid letter
      if (seenLetters[letter]) {
        //seenLetters[letter] here is using the value of char as a key to access a property (or check if the property exists) in the seenLetters object.
        return false;
      }
      seenLetters[letter] = 1; // just to add a property if it doesnt exist on object
    }
  }
  return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("aba")); // Output: false
console.log(isIsogram("moOse")); // Output: false
