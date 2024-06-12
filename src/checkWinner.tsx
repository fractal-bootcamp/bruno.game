
import React from "react";


type Cell = 'x' | 'o' | null

export default interface Game {
    board: Cell[]
}

const board = [null, null, null, null, null, null, null, null, null]

const game: Game = {
    board: board,
}


type VictoryPosition = [number, number, number]

//positibilities of winning
const victoryConditions: VictoryPosition[] = [
    // row win conditions
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // column win conditions
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    // diagonal win conditions
    [1, 4, 7],
    [2, 5, 8]
]


//Simpler solution: combining both needs, the definition on who is the winner, as well as who won.
//It is not really necessary to define it or do a double work.
function checkWinner(): string {
    //for a constant [a,b,c] of victoryCodintions, i.e., the array of possible combinations of victory,
    for (const combination of victoryConditions) {
        const [a, b, c] = combination;
        // if the position of a, and if the value of the position of a is equal to the value of position in b, and b=c, then a=c,
        //then "X" is the winner
        if (game.board[a] && game.board[a] === game.board[b] && game.board[a] === game.board[c]) {
            return `${game.board[a]} is the winner`;
        }
    }
    return 'No winner';
}
