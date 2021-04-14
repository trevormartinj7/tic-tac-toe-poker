let tracking = [];

//makes it so array is not undefined which would screw up with victory checks
for(let i = 0; i < 9; i++){
    tracking.push(i);
}

let endGame = false;

function play(param){
    let playerSpan = document.getElementById('player');
    let clickedBox = document.getElementById(param);

    if(clickedBox.innerText == 'O' || clickedBox.innerText == 'X'){
        alert("That spot is full");
    } else if(!endGame){


        clickedBox.innerText = playerSpan.innerText;
        tracking[param] = playerSpan.innerText;
        if(playerSpan.innerText === "X"){
            playerSpan.innerText = "O";
        } else{
            playerSpan.innerText = "X";
        }

        //checks for vertical victory
        for(let i = 0; i < 3; i++){
            if(tracking[i] == tracking[i+3] && tracking[i+3] == tracking[i+6]){
                alert(tracking[i] + " wins!");
            }
        }

        //checks for horizontal victory
        for(let i = 0; i < 3; i++){
            if(tracking[i] == tracking[i+1] && tracking[i+1] == tracking[i+2]){
                alert(tracking[i] + " wins!");
            }
        }

        //checks for diagonal victory

        if(tracking[0] == tracking[4] && tracking[4] == tracking[8]){
            alert(tracking[0] + " wins!");
        }
        
        //diagonal other way
        if(tracking[2] == tracking[4] && tracking[4] == tracking[6]){
            alert(tracking[2] + " wins!");
        }
        
        victoryCheck();


        console.log(param);
    } else{
        alert("The game is over");
    }
    
}

function victoryCheck(){



        //checks for vertical victory
        for(let i = 0; i < 3; i++){
            if(tracking[i] == tracking[i+3] && tracking[i+3] == tracking[i+6]){
                alert(tracking[i] + " wins!");
                endGame = true;
                resetGame();

            }
        }
    
        //checks for horizontal victory

        for(let i = 0; i < 9; i = i + 3){
            if(tracking[i] == tracking[i+1] && tracking[i+1] == tracking[i+2]){
                alert(tracking[i] + " wins!");
                endGame = true;
                resetGame();
            }
        }
    
        //checks for diagonal victory
    
        if(tracking[0] == tracking[4] && tracking[4] == tracking[8]){
            alert(tracking[0] + " wins!");
            endGame = true;
            resetGame();
        }
        
        //diagonal other way
        if(tracking[2] == tracking[4] && tracking[4] == tracking[6]){
            alert(tracking[2] + " wins!");
            endGame = true;
            resetGame();
        }
        
}

function resetGame(){
    for(let i =0; i < tracking.length; i++){
        tracking[i] = i;
    }
    endGame = false;
    for(let i = 0; i < 9; i++){
        let clearVar = "";
        let tempSquare = document.getElementById(i);
        tempSquare.innerText = clearVar;
    }

}