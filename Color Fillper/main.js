
const colorname=['green','blue','red','rgb(28, 118, 118)','#6b410a']

let btn=document.querySelector('.btn');
let color=document.querySelector('.color');

btn.addEventListener("click",()=>{
    let bodycolor=colorname[getcolor()]
    document.body.style.backgroundColor=bodycolor;
    color.textContent=bodycolor;
})

function getcolor() {
    return Math.floor(Math.random()*colorname.length);
    
}