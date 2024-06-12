import { useState } from 'react'

//1. data first, elements UI later

//2. when it comes to the game, we need the first basic elements, in
//this case, the board as the scenario that displays the winning condittions

//for the PC, we need to write a function to define who has won

const board: string[] = ['', '', '', '', '', '', '', '', '']

type VictoryPosition = [number, number, number]

//positibilities of winning
const victoryConditions: VictoryPosition[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

//move cache
const player1: number[] = []
const player2: number[] = []

// A player is an array that “collects” positions in the 3x3 grid.
//Each move displays either X or O in the grid,
//as well as collects the data into the playerArray.

// function player1() => {
//   const [moves, setMoves] = useState[]
//   let has1Won = false;

//   return (

//   )

// }

// function player2() => {
//   const [moves, setMoves] = useState[]
//   let has2Won = false;

//   return (
//     useState[]
//   )

// }

// A move is a function that:
//1) stores a particular value of the board array into one of the players

//The dynamics of moves:
//Define who is first and whether X or O
//Then dynamic of a turn

//Model of move:
//A move is an action, onClick, that affects the array board and the array player
//When onClick happens, check:
//Has someone won?
//if yes, no more game. Display that on screen.
//if not, move is valid.
// Is that spot available?
// if yes, move is valid.
// if not, nothing or a message

// The move "happens":
//a function is called, this function
//1) puts an X or an O in the picked index,

//2) gathers that position of the array
//and puts it into the player's array

// Checks whether some of the states have changed:
// the function checkWinner is called
//  if has1Won or has2Won = true, call Victory
//checkTie:
// if checkTie = true, call Tie

function checkWinCondition() {
  for (let i = 0; i < 9; i++) {

    if (player1 === victoryConditions[i]) {
      has1Won = true;
    }

    if (player2 === victoryConditions[i]) {
      has2Won = true;
    }


  }

}


function checkWinner() {

  for (let i = 0; i < 9; i++) {

    if (player1 === victoryConditions[i]) {
      return console.log('player 1 has won!')
    }

    else

      if (player2 === victoryConditions[i]) {
        return console.log('player 2 has won!')
      }


  }

  //we will check whether the state is equivalent to one of the winning possibilities
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       Tic tac toe
//     </>
//   )
// }

// export default App
