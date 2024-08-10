let hexcolor=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let btn=document.querySelector(".btn");
let color=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let hex='#';
    for(let i=0;i<6;i++){
        hex+=hexcolor[getcolor()];

    }
    document.body.style.backgroundColor=hex;
    color.textContent=hex;
})

function getcolor() {
    return Math.floor(Math.random()*hexcolor.length);
}