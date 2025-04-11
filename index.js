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


// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//   console.log("Pleas write a real positive number");
// } else if (age < 18) {
//   console.log("you are too young.");
// } else if (age >= 18 && age <= 50) {
//   console.log("you can drink");
// } else if (age > 50 && age <= 80) {
//   console.log("You should exercise");
// } else if (age === 100) {
//   console.log("wow you are wise");
// } else if (age > 80) {
//   console.log("You can do whatever you want.");
// }



// true || true === true
// false || true === true
// true || false === true
// false || false === false

// true && true === true
// false && true === false
// true && false === false
// false && false ===false

// const title = document.getElementById("something");
// console.log(ti  tle.id)
// title.innerText = "Got you!";
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     h1.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("sos no wifi");
// }

// function handleWindowOnline() {
//     alert("ALL GOOD");
// }

// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){    
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }

    h1.classList.toggle("clicked"); //이게 위의 코드랑 똑같은 기능
}
h1.addEventListener("click", handleTitleClick);