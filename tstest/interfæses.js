/**
 * Created by kaspe on 2016-11-12.
 */
// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
//this will give warning becourse it's not a food (name spelled wrong)
var ice_creamError = {
    nmea: "ice cream",
    calories: 200
};
speak(ice_cream);
//# sourceMappingURL=interfæses.js.map