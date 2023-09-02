let number = 0;
const button = document.querySelector("#sub");
const disply = document.querySelector("#display")
button.addEventListener("click",()=>{
    number++;
    disply.textContent = number;
})