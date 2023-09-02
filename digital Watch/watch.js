function myTime(){
    var myDate = new Date();
     var hr,min = myDate.getMinutes() > 10 ? "0" + myDate.getMinutes() : myDate.getMinutes(),
     sec =myDate.getSeconds() > 10 ? "0" + myDate.getSeconds() : getSeconds(),
    M = myDate.getHours() >=12 ? 'PM' : 'AM';

    if(myDate.getHours == 0){
hr = 12;
    }else if(myDate.getHours <12){
        hr = myDate.getHours() -12;

    }else {
        hr = myDate.getHours();
    }
var currentTime = hr + ":" + min + ":" + sec + ":";
document.getElementsByClassName("H")[0].innerHTML = currentTime;
document.getElementsByClassName("M")[0].innerHTML = M;


var myDay = ['sunday','monday','tuesday','wednessday','thursday','Friday','saturday'],
 myMonth = ["january","febroary",'March',"april","may","june","july","Agust","Septembre","october","Nobember","December"],
 day = myDate.getDate() ;

 var currentDate = myDate[myDate.getDay()]+ ',' + myMonth[myDate.getMonth()] + "," + day;
 document.getElementsByClassName("date")[0].innerHTML = currentDate;

}

myTime();
setInterval(function(){
    myTime();
},1000);