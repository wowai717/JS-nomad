// const loginForm = document.getElementById("login=form")
// const loginInput = loginForm.querySelector("input")
// const loginButton = loginForm.querySelector("button")

// HTML element에서 찾는다 
// id에서 login-form찾고 그 안에서 input,button을 찾음


const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")
// 더 짧게 하자면 이렇게 작성 가능, 한 element에서 찾는다

function onLoginBtnClick(){
    console.log(loginInput.value);
}
loginButton.addEventListener("click", onLoginBtnClick)
