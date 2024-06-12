import { checkWinCondition } from './App';

const testBoard = [
    ['', '', '', '', '', '', '', '', '']
];

const winState = checkWinCondition(testBoard);

console.log(winState)