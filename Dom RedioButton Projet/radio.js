let group = document.querySelector('.group');
let output = document.querySelector(".output");
const size = ['XS','S','M',"L", "XL"];

group.innerHTML = size.map((size)=>
`   <div>
<input type="radio" name="size" value="${size}" id="${size}">
<label for=" ${size}">${size}</label>
</div>`
).join(" ")

const RadioButton = document.querySelectorAll("input");
for (const radiobtn of RadioButton){
    radiobtn.addEventListener("change", ShowOutput)
}

function ShowOutput(e){
    console.log(e)
    if( this.checked){
        document.querySelector(".output").innerHTML = `you selected: ${this.value}`
      

    }
}
