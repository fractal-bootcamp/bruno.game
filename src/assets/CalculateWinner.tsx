import { useState } from 'react';



// Function calculateWinner takes a parameter squares.

function calculateWinner(squares) {

  //declares a const of lines that are conditions of victory
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //rows

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //columns

    [0, 4, 8],
    [2, 4, 6],
    //diagonals
  ];

  //runs a for loop that declares
  //while i is less than the length of lines,
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // we will check whether a =b, and b = c.
    //If this is the case, a = c, therefore we have a line
    //We are checking the equivalence inside each row of the array,
    //in order to define whether there is a victory condition
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
