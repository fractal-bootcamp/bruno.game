import { checkWinCondition } from '../src/firstattemptBruno';

const testBoard = [
    ['', '', '', '', '', '', '', '', '']
];

const winState = checkWinCondition(testBoard);

console.log(winState)