# JavaScript Bug: Incorrect Return Value in myFunc Function

This repository demonstrates a common error in JavaScript: incorrect return statement in a function handling edge cases. The `myFunc` function is designed to add two numbers. However, it incorrectly returns 0 if either input is 0.

## Bug Description

The function `myFunc` returns an incorrect value (0) when either of its inputs (`a` or `b`) is zero. It should correctly return the sum `a + b` in all cases.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run the code using a JavaScript interpreter (e.g., Node.js): `node bug.js`.
4. Observe the incorrect output.