let timer=60;
let hitrun=0;
let score=0;

function makebubble(){
    let btm=document.querySelector("#pbtm");
    let count="";
    for(let i=1;i<=133;i++){
        let rn=Math.floor(Math.random()*10);
        count+=`<div class="bubble">${rn}</div>`;
    }
    btm.innerHTML=count;
}
function changetimer(){
    let timerint=setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game over!!</h1>`;
        }     
    }, 1000);
}

function runhit(){
    hitrun=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=`${hitrun}`;
}

function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",(ele)=>{
    let clickbtn=Number(ele.target.textContent);
    if(hitrun===clickbtn){
        increaseScore();
        makebubble();
        runhit();
    }
})
makebubble();
changetimer();
runhit();

