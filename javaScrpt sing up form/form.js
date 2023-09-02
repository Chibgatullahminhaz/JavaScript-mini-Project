let username = document.querySelector('#Username');
let Email = document.querySelector("#Email");
let password = document.querySelector("#password");
let password2 =document.querySelector("#Password2");
let form = document.querySelector("#form");


function ShowError(input, message){
 const FormControl = input.ParentElenemt;
 FormControl.className = "form-container error";
 const small = FormControl.querySelector("small");
 small.innerHTML = message;
}


function  ShowSuccess(input){
    const FormControl = input.ParentElenemt;
    FormControl.className = "form-container success";
}

// Email 

// function ChackMail(){
//     const Rexn = Write regular Expression
//     if(Rexn.test(input.value)){
//         ShowSuccess(input)
//     }else{
//         ShowError(input, "Email is not Valid");
//     }
// }

function CheckInputLength(input,min,max){
    if(input.value.lenght < min){
        ShowSuccess(input,'${GetFiedName(input)}you must be at least ${min} character')
    }else if(input,value.lenght > max){
        ShowError(input, '${GetFiedName(input) you must be less then ${max} Characters}')
    }
    else{
        ShowSuccess(input)
    }
}



function GetFiedName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function CheckpasswoedMatch(input, input2){
    if(input.value !== input2.value){
ShowError(input2, "Password in not ")
    }
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    CheckInputLength(username, 3, 20)
    CheckInputLength(password,6, 30)
    CheckpasswoedMatch(password, password2);
})