// const player = {
//     name: "wj",
//     sayHello: function(otherPersonName){
//     console.log("Hello!" + otherPersonName + "nice to meet you");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");



// const calculator = {
//     plus:function (a, b){
//         return a + b;
//     },
//     minus:function (a, b){
//         return a - b;
//     },
//     times:function (a, b) {
//         return a * b;
//     },
//     divide:function (a, b){
//         return a / b;
//     },
//     powerOf:function (a, b){
//         return a ** b;
//     },

// };


// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(5, 10);
// const timesResult = calculator.times(10, minusResult)
// const divideResult = calculator.times(times, plusResult);
// const powerOfResult = calculator.powerOf(divideResult, minusResult);


// const age = parseInt (prompt("How old are you?"));

// if(isNaN(age)){
//     console.log("Pleas write a number") 
// } else {
//     console.log("Thank you for writing your age.")
// }

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age <0) {
    console.log("Pleas write a real positive number");
} else if (age < 18) {
    console.log("you are too young.");
} else if(age >= 18 && age <= 50){
    console.log("you can drink");
} else if(age >50 && age <= 80){
    console.log("You should exercise");
} else if(age > 80){
    console.log("You can do whatever you want.");
} 