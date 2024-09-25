let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let responseBtn=document.querySelector(".response");
let newGameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;
const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
        console.log("box was clicked");
      if(turnO){
        box.innerText="O";
        turnO=false;
      }
        else{
            box.innerText="X";
            turnO=true;
        }
box.disabled=true;
checkWinner();
      
    });
   
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    responseBtn.innerText = `Congratulations, the winner is ${winner}!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  
  };
  
const checkWinner = () => {
    for (let pattern of winningPatterns) {
      let position1Value = boxes[pattern[0]].innerText;
      let position2Value = boxes[pattern[1]].innerText;
      let position3Value = boxes[pattern[2]].innerText;
  
      // Check if all three positions are filled and have the same value
      if (position1Value !== "" && position1Value === position2Value && position2Value === position3Value) {
        console.log("WINNER");
        
        showWinner(position1Value);
        return; // Exit the loop once a winner is found
      }
    }
 
  };
  newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);