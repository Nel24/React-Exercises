import React, { useState } from "react";
import Input from "./components/Input";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [result, setResult] = useState(``);

  const isIsogram = (input) => {
    console.log(input);
    const seenLetters = {};
    let isIsogram = true; // Variable to track if it's an isogram

    for (const letter of input) {
      if (/[a-z]/.test(letter)) {
        if (seenLetters[letter]) {
          console.log(`repeated sya!`);
          setResult(`${input} Not an Isogram!`);
          isIsogram = false; // Update the variable if it's not an isogram
          break; // Exit the loop early since it's not an isogram
        }
        seenLetters[letter] = true;
      }
    }

    // Only set the result if it's an isogram
    if (isIsogram) {
      setResult(`${input} an Isogram!`);
    }
  };

  return (
    <div>
      <h1>{result}</h1>
      <Input onIsIsogram={isIsogram} />
    </div>
  );
};

export default App;
