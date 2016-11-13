/**
 * Created by kaspe on 2016-11-01.
 */


//es5 solution
// var fives = [];
// function Numbers(numbs, fives)
// {
//     this.nums = numbs;
//
//     this.nums.forEach(function (v)
//     {
//         if (v % 5 === 0)
//         {
//             fives.push(v);
//             console.log("her er fives: " + fives)
//         }
//     });
// }
// var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50], fives);
// console.log(fives);


//es6 solution idk om det var det Lars tænkte
// function Numbers(numbs)
// {
//     this.nums = numbs;
//     this.fives = [];
//     this.nums.map(v=>
//     {
//         if (v % 5 === 0)
//         {
//             console.log("her er v: " + v)
//             this.fives.push(v);
//         }
//     });
// }
// var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
// console.log(numbers.fives);


//B)

// var counter =
// {
//     count: 0,
//     inc : (c => this.count++)
// }
//
// var func = counter.inc();
// func();
// console.log(counter.count)

