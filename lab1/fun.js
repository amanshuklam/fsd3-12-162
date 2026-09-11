// Write a function to take any digit (0-9) and return its in word
const toWords = (digit) => {
  if (digit === 0) return "zero"; // handle zero separately
  if (digit >= 1 && digit <= 9) {
    return words[digit - 1];
  }
  return "invalid"; // for inputs outside 0–9
};

const words = ["one","two","three","four","five","six","seven","eight","nine"];

// Example usage:
console.log(toWords(0)); // "zero"
console.log(toWords(5)); // "five"
console.log(toWords(9)); // "nine"
console.log(toWords(10)); // "invalid"

// frontend
// flask,vue js,angular
// common things=html,css(bootstrap,tailwind),events
// Framework-A framework in programming is a structured foundation of reusable code, tools, and rules that simplifies software development by providing predefined architecture and components. It helps developers build applications faster, with fewer errors, and in a standardized way.

// backend-node js,spring boot, fast api,D jango,php,express js,nest js,php.
// API-Application Programming Interface
