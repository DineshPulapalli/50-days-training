let timerElement=document.getElementById("timer");
let defuseElement=document.getElementById("defuser");
let counter=10;
let intervalId=setInterval(function(){
counter=counter-1;
timerElement.textContent=counter;
if(counter===0){
    timerElement.textContent="BOOM!. . .";
    clearInterval(intervalId);
}
},1000);
 defuseElement.addEventListener("keydown",function(event){
    let defuseKey=defuseElement.value;
    if(counter!=0 && defuseKey==="dinesh" && event.key==="Enter"){
        timerElement.textContent="You Did It!!"
        clearInterval(intervalId)
    }
    else if(counter!=0 && event.key==="Enter")
        timerElement.textContent="Incorrect!"
 })
