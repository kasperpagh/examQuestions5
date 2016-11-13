/**
 * Created by kaspe on 2016-11-12.
 */
var http = ("http");
// let fetch = ("node-fetch");
//
// console.log(http);
// console.log(fetch);
var burger = 'hamburger'; // String
var calories = 300; // Numeric
var tasty = true; // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
//# sourceMappingURL=llama.js.map