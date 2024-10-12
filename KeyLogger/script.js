let startbtn=document.querySelector(".btn1");
let stopbtn=document.querySelector(".btn2");
let state=document.querySelector(".div1");
let log=document.querySelector(".div2");

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startbtn.disabled=true;
    stopbtn.disabled=false;

})
stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    state.textContent="";
    log.textContent="";
    stopbtn.disabled=true;
    startbtn.disabled=false;
    
})
function handledown(e) {
    state.textContent=`Key ${e.key} is pressed down`;
    log.textContent=`Key is down`;
    
}
function handleup(e) {
    state.textContent=`Key ${e.key} is pressed up`;
    log.textContent=`Key is up`
    
}
