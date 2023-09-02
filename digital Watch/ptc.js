// // var number1= prompt("Enter a Number1: ");

// //     var number2= prompt("Enter a Number2: ");

// //     var number3= prompt("Enter a Number3: ");



// //     var result = number1>number2 && number1>number3 ? number1: number2>number3 && number2>number1 ? number2 : number3    

    

// //     console.log("Large Number is: "+result);



//     var num1 = prompt();
//     var num2 = prompt();
//     var num3 = prompt();

//     var result = num1 > num2 & num1 > num3 ? num1 : num2 > num3 & num2 > num1 ? num2 : num3; 

//     document.getElementById("bigNum").innerHTML = "Large Number is " + result;


// //  proman ba ber koro je 3ti number er modde bihottor number konti?

//     let num1 = Number(prompt());
//     let num2 = Number(prompt());
//     let num3 = Number(prompt());

//     const result = (num1>num2 & num1 > num3) ? num1 : (num2 > num1 & num2 > num3) ? num2 :num3;
     
//     document.getElementById("bigNum").innerHTML = 'large number is  ' + result;


// //  used if else

//    var big = document.getElementById("bigNum");

// if(num1 > num2 & num1 > num3){
// big.innerHTML = 'Large Number is ' + num1 ;
// }
// else if (num2 > num1 & num2 > num3){
//     big.innerHTML = 'Large Number is ' + num2 ;
// }else{
//     big.innerHTML = 'Large Number is ' + num3 ;
// }



// End task 
//  start watch project


function myTime(){
    var myDate = new Date();
     var hr,min = myDate.getMinutes() > 10 ? "0" + myDate.getMinutes() : myDate.getMinutes(),
     sec =myDate.getSeconds() > 10 ? "0" + myDate.getSeconds() : getSeconds(),
    M = myDate.getHours() >=12 ? 'PM' : 'AM';

    if(myDate.getHours ==0){
hr = 12;
    }else if(myDate.getHours >12){
        hr = myDate.getHours() -12;

    }else {
        hr = myDate.getHours();
    }
var currentTime = hr + ":" + min + ":" + sec + ":";
document.getElementsByClassName("H")[0].innerHTML = currentTime;
document.getElementsByClassName("M")[0].innerHTML = M;

}





//  End watch prject