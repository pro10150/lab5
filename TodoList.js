let input = document.querySelector("input");
input.addEventListener("keyup", function(event) {add(event)});

function add(event){
    if(event.keyCode === 13){
        let string = document.getElementById("todoInput").value;
        let ul = document.querySelector("ul");
        document.getElementById("todoInput").value = "";
        
        let li = document.createElement("li");
        li.innerHTML = "<span><i class='fa fa-trash'></i></span> "+string;
        ul.appendChild(li);
        addClick();
        
    }
}
function addClick(){
    let complete = document.querySelectorAll("li");
    for(let i=0;i<complete.length;i++){
        complete[i].addEventListener("click", function() {
            complete[i].classList.add("complete");
        });
    }
        
    let del = document.querySelectorAll("span");
    for(let i=0;i<del.length;i++){
        del[i].addEventListener("click", function(){
            del[i].parentElement.remove();
        });
    }
     
}
   
