function myFunc(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This is where the bug lies. It should be return a + b
  }
  return a + b;
}

console.log(myFunc(0, 5)); // Output: 0 (incorrect)
console.log(myFunc(5, 0)); // Output: 0 (incorrect)
console.log(myFunc(5, 5)); // Output: 10 (correct)