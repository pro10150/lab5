

let button = document.querySelectorAll("button");
let html = document.querySelectorAll("h1");
for(i=0;i<html.length;i++){
    html[i].addEventListener("click",function() {switchText()})
}
for(i=0;i<button.length;i++){
    console.log(button[i].id);
    let string = button[i].id;
    button[i].addEventListener("click",function() {onClick(string)});
}
function switchText(){
    for(i=0;i<html.length;i++){
        html[i].innerHTML = "YEET";
    }
}
function onClick(id){
    console.log(id);
    alert(document.getElementById(id).innerHTML + " said: " + "YEET");
    document.getElementById(id).style.backgroundColor = "black";
    document.getElementById(id).style.color = "white";
}