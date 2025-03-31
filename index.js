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


const age = parseInt (prompt("How old are you?"));

if(isNaN(age)){
    console.log("Pleas write a number") 
} else {
    console.log("Thank you for writing your age.")
}