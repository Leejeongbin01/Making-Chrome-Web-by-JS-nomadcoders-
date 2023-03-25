const loginForm=document.querySelector("#login-form");
const logininput=loginForm.querySelector("input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username=logininput.value;
    
    localStorage.setItem(USERNAME_KEY,username);
    // key, 뒤의 username이 value값 >>즉 입력하는값
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);



const savedUsername=localStorage.getItem(USERNAME_KEY);


if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}