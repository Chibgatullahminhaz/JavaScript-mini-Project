const selectFontSize = document.getElementById("selectFontSize");
const resetButton = document.getElementById("resetButton");
const selectBGcolor = document.getElementById("selectBGcolor");
const mainElements = document.querySelector("main");

// chaneFontSize
const chaneFontSize = (event)=>{
    const selectFontSize = event.target.value;
    mainElements.style.fontSize = selectFontSize;
    localStorage.setItem("fontSize",selectFontSize );
}
// changebgColor
const chaneBGcolor = (event)=>{
    const selectBGcolor = event.target.value;
    mainElements.style.backgroundColor = selectBGcolor;
    localStorage.setItem("bgColor",selectBGcolor );
}
// clearLocalStorage
const clearLocalStorage = ()=>{
    localStorage.removeItem("bgColor" );
    localStorage.removeItem("fontSize" );
}



// add evetn listners
selectFontSize.addEventListener("change", chaneFontSize);
selectBGcolor.addEventListener("change", chaneBGcolor);
resetButton.addEventListener("click", clearLocalStorage);