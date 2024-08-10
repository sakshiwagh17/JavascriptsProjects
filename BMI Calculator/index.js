
let btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    let height=document.querySelector(".height").value;
    let weight=document.querySelector(".weight").value;
    let result=document.querySelector(".result");
    let guide=document.querySelector(".guide");
    if(height===0||height===''||isNaN(height)){
        result.innerHTML=`Please Give a valid height!`
    }else if(weight===0||weight===''||isNaN(weight)){
        result.innerHTML=`Please Give a valid weight!`
    }
    else{
        const bmi=(weight)/(height/100*height/100);
        result.innerHTML=`${bmi}`;
        if(bmi<=18.6){
            guide.innerHTML=`You are underweight`
        }else if(18.6<=bmi<=24.9){
            guide.innerHTML=`You have normal weight`
        }else if(bmi>=24.9){
            guide.innerHTML=`You are overweight!`
        }
    }


    
})
