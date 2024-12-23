document.addEventListener('DOMContentLoaded', function(){
    console.log("Hi Mom");

    let board = 
        [
            [' ', ' ', ' ', ],
            [' ', ' ', ' ', ],
            [' ', ' ', ' ', ]
        ];
       
    function playerInputs(board) {
        // Function to handle player inputs
    }
        
    function won(board){
        //row win condition
        for (let i = 0; i < 3; i++){
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== ' '){
                return true;
            }
        }
    
        //column win condition
        for (let i = 0; i < 3; i++){
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== ' '){
                return true;
            }
        }
    
        //left to right diagonal win condition
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== ' '){
            return true;
        }
        
        //right to left diagonal win condition
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== ' '){
            return true;
        }
    
        return false;
    }
    
    function clearBoard(){
        return [
            [' ', ' ', ' ', ],
            [' ', ' ', ' ', ],
            [' ', ' ', ' ', ]
        ];
    }
    
    // Call functions here if needed
    // playerInputs(board);
    // console.log(won(board));
})
