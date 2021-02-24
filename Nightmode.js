let isNightMode = false;
let button = document.querySelector("button");
button.addEventListener("click",function() {onClick()});
function onClick(){
    let body = document.getElementsByTagName("BODY")[0];
    let h1Tag = document.getElementById("h1Tag");
    let h2Tag = document.getElementById("h2Tag");
    let color = document.getElementById("color");
    let pTag = document.getElementById("pTag");
    let buttonTag = document.getElementById("buttonTag");
    //alert("yeet");
    if(isNightMode === false){
        body.classList.add("NightMode");
        h1Tag.innerHTML = "NIGHT";
        h2Tag.innerHTML = "night";
        pTag.innerHTML = "day";
        buttonTag.innerHTML = "day";
        color.classList.add("NightMode");
        console.log("class added");
        isNightMode = true;
    }
    else{
        body.classList.remove("NightMode");
        h1Tag.innerHTML = "MORNING";
        h2Tag.innerHTML = "day";
        pTag.innerHTML = "night";
        buttonTag.innerHTML = "night";
        color.classList.remove("NightMode");
        isNightMode = false;
    }
    
}