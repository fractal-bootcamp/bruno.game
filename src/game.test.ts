import { Game, WinCondition, checkWinCondition } from "./game"
import { expect, test } from "bun:test"; // this file must be run with bun now


interface WinConditionTest {
    game: Game,
    expectedOutcome: WinCondition
}

// const tests: Record<string, WinConditionTest> = {
//     'testXWillWinIfBothPlayersHaveWins': {
//         game: {
//             board: [
//                 'x', 'x', 'x',
//                 'o', 'o', 'o',
//                 'o', 'o', 'x'
//             ]
//         },
//         expectedOutcome: { outcome: 'win', winner: 'x' }
//     }
// }


test("textXWillWinIfBothPlayersHaveWins", () => {
    const game: Game = {
        board: [
            'x', 'x', 'x',
            'o', 'o', 'o',
            'o', 'o', 'x'
        ]
    }
    const expectedOutcome: WinCondition = { outcome: 'win', winner: 'x' }

    expect(checkWinCondition(game)).toBe(expectedOutcome);
});


test("testGameIsDraw", () => {
    const game: Game = {
        board: [
            'x', 'o', 'x',
            'o', 'x', 'o',
            'o', 'x', 'o'
        ]
    }
    const expectedOutcome: WinCondition = { outcome: 'draw' }

    expect(checkWinCondition(game)).toBe(expectedOutcome);
});