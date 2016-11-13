/**
 * Created by kaspe on 2016-11-12.
 */

let http = ("http");
// let fetch = ("node-fetch");
//
// console.log(http);
// console.log(fetch);

var burger: string = 'hamburger';     // String
let calories: number = 300;       // Numeric
let tasty: boolean = true;            // Boolean

// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void {
    console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);