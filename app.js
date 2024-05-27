let text = document.getElementById("text")


let hour = 0;
let mins = 0;
let second = 0;
let milli = 0;
var stop ="stop"
var timer
function start(){
    timer = setInterval(()=>{
        milli++
        if(milli>100){
            second++
            milli=0
        }
        if(second>60){
           mins++
           second=0
        }
        if(mins>60){
           hour++
           mins=0
        }
        text.innerText=`  ${hour} :  ${mins}  :   ${second}   :   ${milli}  `
    },10)
}
    function stope(){
        if(stop=="stop"){
         clearInterval(timer)
         stop="start"
        }else{
            start()
            stop="stop"
        }
        
    }

    function reset(){
        location.reload()
    }