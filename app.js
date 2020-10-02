var ticContainer = document.querySelector(".ticContainer");
var storage = [];
var tacSec = document.querySelectorAll(".tacSec")
var counterForDraw = 0;
var xWinBox = document.querySelector(".winnerX")
var oWinBox = document.querySelector(".winnerO")
var resetBtn = document.querySelector(".resetBtn")
var oWon = false;
var xWon = false;
var oCount = 0;
var xCount = 0
// var playerOScore = document.querySelector("#playerOScore");
// var playerXScore = document.querySelector("#playerXScore");
var playerOScore = document.querySelector(".playerOContainer");
var playerXScore = document.querySelector(".playerXContainer");

function handleClickO(event) {
    event.target.textContent = "O";
    

    if (event.target.textContent = "O") {
        storage.push("O");
        
    }
    if (storage[storage.length - 1] == "O") {
            ticContainer.addEventListener("click", handleClickX)
            ticContainer.removeEventListener("click", handleClickO)
    } // Win Conditions Below //
    if (tacSec[0].textContent == "O" && tacSec[1].textContent == "O" && tacSec[2].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[3].textContent == "O" && tacSec[4].textContent == "O" && tacSec[5].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[6].textContent == "O" && tacSec[7].textContent == "O" && tacSec[8].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[0].textContent == "O" && tacSec[3].textContent == "O" && tacSec[6].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[1].textContent == "O" && tacSec[4].textContent == "O" && tacSec[7].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[2].textContent == "O" && tacSec[5].textContent == "O" && tacSec[8].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[0].textContent == "O" && tacSec[4].textContent == "O" && tacSec[8].textContent == "O"){
        oWin();
        oWon = true;
    }
    if (tacSec[2].textContent == "O" && tacSec[4].textContent == "O" && tacSec[6].textContent == "O"){
        oWin();
        oWon = true;
    }

///experiment for draw///
    for(var i = 0; i < storage.length; i++)
        if (tacSec[0].textContent !== "O" && tacSec[1].textContent !== "O" && tacSec[2].textContent !== "O"){

        }   
        if (tacSec[3].textContent !== "O" && tacSec[4].textContent !== "O" && tacSec[5].textContent !== "O"){
            
        }   
        if (tacSec[6].textContent !== "O" && tacSec[7].textContent !== "O" && tacSec[8].textContent !== "O"){
            
        }   
        if (tacSec[0].textContent !== "O" && tacSec[3].textContent !== "O" && tacSec[6].textContent !== "O"){
            
        }   
        if (tacSec[1].textContent !== "O" && tacSec[4].textContent !== "O" && tacSec[7].textContent !== "O"){
            
        }   
        if (tacSec[2].textContent !== "O" && tacSec[5].textContent !== "O" && tacSec[8].textContent !== "O"){
            
        }   
        if (tacSec[0].textContent !== "O" && tacSec[4].textContent !== "O" && tacSec[8].textContent !== "O"){
            
        }   
        if (tacSec[2].textContent !== "O" && tacSec[4].textContent !== "O" && tacSec[6].textContent !== "O"){
            
        }   
        if (storage.length == 9 && oWon == false){
            itsADraw()
        }
}

function handleClickX(event) {
    event.target.textContent = "X";
    

    if (event.target.textContent = "X") {
        storage.push("X");
        
    }

    if (storage[storage.length - 1] == "X") {
            ticContainer.addEventListener("click", handleClickO)
            ticContainer.removeEventListener("click", handleClickX)
    } // Win Conditions Below //
    if (tacSec[0].textContent == "X" && tacSec[1].textContent == "X" && tacSec[2].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[3].textContent == "X" && tacSec[4].textContent == "X" && tacSec[5].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[6].textContent == "X" && tacSec[7].textContent == "X" && tacSec[8].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[0].textContent == "X" && tacSec[3].textContent == "X" && tacSec[6].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[1].textContent == "X" && tacSec[4].textContent == "X" && tacSec[7].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[2].textContent == "X" && tacSec[5].textContent == "X" && tacSec[8].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[0].textContent == "X" && tacSec[4].textContent == "X" && tacSec[8].textContent == "X"){
        xWin();
        xWon = true;
    }
    if (tacSec[2].textContent == "X" && tacSec[4].textContent == "X" && tacSec[6].textContent == "X"){
        xWin();
        xWon = true;
    }
/// Draw Experiment///    

        if (tacSec[0].textContent !== "X" && tacSec[1].textContent !== "X" && tacSec[2].textContent !== "X"){
            
        }
        if (tacSec[3].textContent !== "X" && tacSec[4].textContent !== "X" && tacSec[5].textContent !== "X"){
            
        }
        if (tacSec[6].textContent !== "X" && tacSec[7].textContent !== "X" && tacSec[8].textContent !== "X"){
            
        }
        if (tacSec[0].textContent !== "X" && tacSec[3].textContent !== "X" && tacSec[6].textContent !== "X"){
            
        }
        if (tacSec[1].textContent !== "X" && tacSec[4].textContent !== "X" && tacSec[7].textContent !== "X"){
            
        }
        if (tacSec[2].textContent !== "X" && tacSec[5].textContent !== "X" && tacSec[8].textContent !== "X"){
            
        }
        if (tacSec[0].textContent !== "X" && tacSec[4].textContent !== "X" && tacSec[8].textContent !== "X"){
            
        }
        if (tacSec[2].textContent !== "X" && tacSec[4].textContent !== "X" && tacSec[6].textContent !== "X"){
            
        }

        if (storage.length == 9 && xWon == false){
            itsADraw()
        }

}


function resetThis() {
    if(oWon == true){
        oWinBox.style.visibility = "hidden";
        for (var i = 0; i < ticContainer.childElementCount; i++) {
            tacSec[i].textContent = ""
        }    
    } 

    if (xWon == true) {
        xWinBox.style.visibility = "hidden";
        for (var i = 0; i < ticContainer.childElementCount; i++) {
            tacSec[i].textContent = ""
        }
    } 
}


resetBtn.addEventListener("click",resetThis);

for (var i = 0; i < ticContainer.childElementCount; i++) {
    ticContainer.addEventListener("click", handleClickO);
}


/////////////// #### Winning Functions #### ///////////////

function oWin(event) {
    oWinBox.style.visibility = "visible";
    oWon = true;
    if (oWon == true){
        oCount++; 
    }
    playerOScore.textContent = (`Player O Score is ${xCount}`)
}

function xWin(event) {
    xWinBox.style.visibility = "visible";
    xWon = true;
    if (xWon == true){
        xCount++;
    }
    playerXScore.textContent = (`Player X Score is ${xCount}`)
}

function itsADraw(event) {
    alert("It's a Draw");

}
