
let one   = document.querySelector("#one");
let two   = document.querySelector("#two");
let three = document.querySelector("#three");
let four  = document.querySelector("#four");
let five  = document.querySelector("#five");
let six   = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine  = document.querySelector("#nine");
let zero  = document.querySelector("#zero");
let backSpace = document.querySelector("#X");
let add   = document.querySelector("#add");
let sub   = document.querySelector("#sub");
let mult  = document.querySelector("#mult");
let divide   = document.querySelector("#divide");
let percent  = document.querySelector("#percent");
let equal =  document.querySelector("#equal");
let dot   =  document.querySelector("#dot");
let symbol   = document.querySelectorAll(".symbol");
let Clear =  document.querySelector("#AC");
let show = document.querySelector("#show");
let operator =  document.querySelector("#operator");
let showOperator =  document.querySelector("#showOperator");
let showNum1 =  document.querySelector("#showNum1");
let showNum2=  document.querySelector("#showNum2");


let Num1  = 0; 
let Num2  = 0;

let answer = 0;
let arr    = [];
let i;
let check    = false;
let checkAdd = false;
let checkSub = false;
let checkMult = false;
let checkDiv = false;
let checkPrcnt = false;

let checkMore  = false;

let back = ()=>{backSpace.addEventListener("click",()=>{
 
    if(check===false){
        
    Num1 = 0;
    arr.pop();
    N1();
   }else{
    Num2 = 0;
    arr.pop();
    N2();
     }

  });
}

back();

Clear.addEventListener("click",()=>{
    arr  = [];
    Num1 = 0;
    Num2 = 0;
    answer = 0 ;
    check = false;
    checkAdd = false;
    checkSub = false;
    checkMult = false;
    checkDiv = false;
    checkPrcnt = false;
    checkMore = false;
    show.innerText = "0";
    operator.innerText = "";
    showNum1.innerText = "";
    showOperator.innerText= "";
    showNum2.innerText = "";
    dot.style.pointerEvents = "auto";
   symbol.forEach((val)=>{
    val.style.pointerEvents = "none";
    console.log("auto")
  });
});

equal.addEventListener("click",()=>{
    operator.innerText = "=";
    calculate();
})

function calculate(){
  
     if(checkAdd===true){
      answer = Num1 + Num2;
      show.innerText = answer;
      showNum1.innerText = Num1;
      showOperator.innerText= "+";
      showNum2.innerText = Num2;
      checkAdd = false;
      checkMore = true;
     }else if(checkSub===true){
        answer = Num1 - Num2;
        show.innerText = answer;
        showNum1.innerText = Num1;
        showOperator.innerText= "-";
        showNum2.innerText = Num2;
        checkSub = false;
        checkMore = true;
       }else if(checkMult===true){
        answer = Num1 * Num2;
        show.innerText = answer;
        showNum1.innerText = Num1;
        showOperator.innerText= "*";
        showNum2.innerText = Num2;
        checkMult = false;
        checkMore = true;
       }else if(checkDiv===true){
        answer = Num1 / Num2;
        show.innerText = answer;
        showNum1.innerText = Num1;
        showOperator.innerText= "/";
        showNum2.innerText = Num2;
        checkDiv = false;
        checkMore = true;
       }else if(checkPrcnt===true){
        answer = Num1 /100;
        show.innerText = answer;
        showNum1.innerText = Num1;
        showOperator.innerText= "%";
        showNum2.innerText = Num2;
        checkPrcnt = false;
        checkMore = true;
       }
    
}

    add.addEventListener("click",()=>{
        arr = [];
        checkAdd = true;
        check = true;
        operator.innerText = "+";
    });

    sub.addEventListener("click",()=>{
        arr = [];
        checkSub = true;
        check = true;
        operator.innerText = "-";
    });
    mult.addEventListener("click",()=>{
        arr = [];
        checkMult = true;
        check = true;
        operator.innerText = "*";
    });
    
    divide.addEventListener("click",()=>{
        arr = [];
        checkDiv = true;
        check = true;
        operator.innerText = "/";
    });

    percent.addEventListener("click",()=>{
        arr = [];
        checkPrcnt = true;
        operator.innerText = "%";
    });

let N2 = ()=>{
    if(check===true){
       Num2 = +arr.join(""); 
       show.innerText = Num2;
       dot.style.pointerEvents = "auto";
   }
   }

   let N1 = ()=>{

    if(check===false){
   
       Num1 = +arr.join(""); 
       show.innerText = Num1;   
   }
   }
   
   function storefunc(i){
       i=i;
       arr.push(i);

     if(checkMore===false){
     N1();
    }else{
        Num1 = answer;
        check = true;
    }
    N2();
     
     symbol.forEach((val)=>{
        val.style.pointerEvents = "auto";
      });
    
   }

   symbol.forEach((val)=>{
    val.style.pointerEvents = "none";
  });

one.addEventListener("click",()=>{
        storefunc(1);
});
two.addEventListener("click",()=>{
    storefunc(2);
});
three.addEventListener("click",()=>{
    storefunc(3);
});
four.addEventListener("click",()=>{
    storefunc(4);
});
five.addEventListener("click",()=>{
    storefunc(5);
});
six.addEventListener("click",()=>{
    storefunc(6);
});
seven.addEventListener("click",()=>{
    storefunc(7);
});
eight.addEventListener("click",()=>{
    storefunc(8);
});
nine.addEventListener("click",()=>{
    storefunc(9);
});
zero.addEventListener("click",()=>{
    storefunc(0);
});
dot.addEventListener("click",()=>{
    dot.style.pointerEvents = "none";
      storefunc('.');
    });


