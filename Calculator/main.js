let btn=document.querySelectorAll(".button");
let result=document.querySelector(".result");

let string="";

btn.forEach((button)=>{
    button.addEventListener("click",(ele)=>{
        if (ele.target.innerHTML=="=") {
            string=eval(string);
            result.value=string;
        }
        else if(ele.target.innerHTML=="AC"){
            string="";
            result.value=string;
        }
        else if(ele.target.innerHTML=="DE"){
            string=string.substring(0,string.length-1)
            result.value=string;
        }
        else{
        string+=ele.target.innerHTML;
        result.value=string;
        }
        
    });
});