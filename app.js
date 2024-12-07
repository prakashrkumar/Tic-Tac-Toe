let boxes=document.querySelectorAll(".box");
let reser_btn=document.querySelector("#reset_btn");
let new_btn=document.querySelector("#new_btn");
let msg_container=document.querySelector(".msg_container")
let msg=document.querySelector("#msg")

let turn0=true; //player0,playerx
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

]

const resetGame=()=>{
    turn0=true;
    enableBoxes()
    msg_container.classList.add("hide")
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
       if(turn0){
         box.innerText="0";
         turn0=false
       }
       else{
         box.innerText="x"
         turn0=true;
       }
       box.disabled=true;
       checkWinner();
    })
})


const disbleBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }

}


const showWinner=(winner)=>{
    msg.innerText=` Conguration You are Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disbleBoxes()

}



const checkWinner=()=>{
    for( let pattern of winPattern){
       
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos3val && pos2val==pos3val){
                
                showWinner(pos1val)
            }
        }
    }
}
new_btn.addEventListener("click",resetGame);
reser_btn.addEventListener("click",resetGame)