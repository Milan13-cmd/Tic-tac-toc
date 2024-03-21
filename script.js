let resetBtn = document.querySelector("#reset-game");
let container = document.querySelector(".game");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg");
let text = document.querySelector("#text");

//--  Function to make a btn  --//

function box(){
    let clutter = "";
    for(let i = 1; i <= 9; i++){
        clutter += `<button class="btn"></button>`;
    }
    container.innerHTML = clutter;
}
box();

let turnO = true; //playerX,playerO

//-- To detemine the win with this winpattern --//
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
let boxes = document.querySelectorAll(".btn");

// -- To run a foreach loop on each  box and add click event listener --//

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box click")
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
           box.innerText= "X"
           turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled =  true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled =  false;
        box.innerText ="";
    }
}

//-- Display the Winner of the game --//
const showWinner = (winner) =>{
    text.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

// Check whether a X or O is a winner --//
const checkWinner = () => {
    for(pattern of winPatterns){
        let pat0 = boxes[[pattern[0]]].innerText;
        let pat1 = boxes[[pattern[1]]].innerText;
        let pat2 = boxes[[pattern[2]]].innerText;

        if(pat0 != "" && pat1 != "" && pat2 != ""){
            if(pat0 === pat1 && pat1 === pat2){
                console.log("winner",pat0);
                
                showWinner(pat0);
            }
        }
        
    }
}


const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);