var a = "Sri Lanka";
// Previous Versions
// a = a + " is my Country";
// Latest Version
a = "".concat(a, " is my Country");
console.log(a);
// In order to run the application convert the .ts file into the JavaScript file
// Step 1 - Open the terminal in VSCode and open the Command Prompt.
// Step 2 - Then type tsc MyFirstTypeScript.ts
// If you don't have TypeScript Compiler (tsc) -> type 'npm install typescript --global'
// Step 3 - Convert the .ts file to .js file
// Step 4 - Type 'node MyFirstTypeScript.js
// a = 100 * 2;         // Compiling error - Type 'number' is not assignable to type 'String'
var b = 100 * 2; // Now its compiling
console.log(b);
