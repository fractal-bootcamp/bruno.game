import { checkWinCondition } from './firstattemptBruno';

const testBoard = [
    ['', '', '', '', '', '', '', '', '']
];

const winState = checkWinCondition(testBoard);

console.log(winState)