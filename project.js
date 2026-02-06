let input = document.getElementById("userText");
let button = document.getElementById("btn");
let para = document.getElementById("output");

button.addEventListener("click", function(){
para.innerText = input.value ;
});