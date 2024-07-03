let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");


let turnO = true; //playerX,playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// const showWinner = (winner) => {
//     msgContainer.querySelector("#msg").innerText = `Congratulations! Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
// }
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            //playerO
            box.innerText ="O";
            turnO = false;
        }
        else{
            //playerX
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;  
        
        checkWinner();
    })
})
const checkWinner = () =>{
    let winnerDeclared = false;
    // for(let pattern of winPatterns){
    //     console.log(pattern[0],pattern[1],pattern[2]);
    // }
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                alert(`winner is ${pos1val}`);
                disableBoxes();
                showWinner(pos1val);
            }
        }
        
    }
    if (!winnerDeclared) {
            checkDraw();
        }
}
const checkDraw = () => {
    let allFilled = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });
    if (allFilled) {
        alert(`It is a draw!`);
    }
}

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () =>{
    turnO = true;
    enableBoxes();
}
resetBtn.addEventListener("click",resetGame);
