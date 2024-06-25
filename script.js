const list=document.getElementById("tasks");
const inp=document.getElementById("in");
const button=document.querySelector("button");

button.addEventListener("click",()=>{
    if (inp.value==="")
     alert("You must Write Something");
    else{
        let task=document.createElement("li");
        let x=document.createElement("span");
        x.textContent="x";
        task.textContent=inp.value;
        task.appendChild(x);
        list.appendChild(task);
    }
    inp.value="";
    save();
})

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
})

function save(){
    localStorage.setItem("data",list.innerHTML);
}

function show(){
    list.innerHTML=localStorage.getItem("data");
}

show();