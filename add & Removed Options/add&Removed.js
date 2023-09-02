const Famework = document.querySelector("#lang");
const addBtn = document.querySelector("#addBtn");
const RemovedBtn = document.querySelector("#RemovedBtn");
const List = document.querySelector('#List');

addBtn.onclick = (e)=>{
e.preventDefault();
if(Famework.value == ""){

}
const option = new Option(Famework.value);
List.add(option);
Famework.value = "";

}

 
RemovedBtn.onclick = (e)=>{
    e.preventDefault();

    let nayArry = [];
for(let i=0; i<List.options.length; i++){
    nayArry[i] = List.options[i].seleted;
}

    let index = List.options.length;
    while(index--){
        if(nayArry[index]){
            List. remove(index)
        }

    }
}


// remove button Not Working😒
