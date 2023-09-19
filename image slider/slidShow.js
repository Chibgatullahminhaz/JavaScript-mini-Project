const imags = [
    "images/flower-1.jpg",
    "images/flower-2.jpg",
    "images/flower-3.jpg",
];

// finding 
 let next = document.getElementById("next");
 let prevent = document.getElementById("prev");
 let img = document.querySelector(".slide-img");
 let count =0;


 next.addEventListener("click",()=>{
count++;
if(count>imags.length -1){
    count= 0;
    img.src= imags[count]
}else{
    img.src= imags[count]
}

 })


 prevent.addEventListener("click",()=>{
    count--;
    if(count <0){
count=imags.length -1
    }else{ img.src = imags[count]}
   

 })


setInterval(() => {
    count--
    if(count <0){
        count= imags.length -1 ;
        img.src= imags[count]
    }else{
        img.src = imags[count]
    }
 
}, 5000);