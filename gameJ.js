let allBox = document.querySelectorAll(".box")
let show= document.querySelector(".hide")
let p = document.querySelector("#p")
let buttons= document.querySelectorAll(".gameB")

const winningPtn=[
    [0,4,8],
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]]


let head =()=>{show.classList.remove("hide")}

let end =()=>{allBox.forEach((last)=>{
    last.disabled=true;
})}
 

let wPlayer= ()=>{
    for(winner of winningPtn){
        let pos1=allBox[winner[0]].innerText;
        let pos2=allBox[winner[1]].innerText;
        let pos3=allBox[winner[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2===pos3){
                head();
                p.innerText=`Winner is ${pos1}`;
                end();
            }
        }
    }
}


turn=true;
allBox.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==true){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
            
        }
        box.disabled=true;
        wPlayer();
        
    })
})


buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        location.reload()
    })
})