


type Cell = 'x' | 'o' | null

export interface Game {
    board: Cell[]
}

const board = [null, null, null, null, null, null, null, null, null]

const game: Game = {
    board: board,
}

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

export interface WinCondition {
    outcome: 'win' | 'draw' | null
    winner?: 'x' | 'o'
}

export function checkWinCondition(game: Game): WinCondition {

    function isWinningPosition(position: VictoryPosition): boolean {
        const positionsAreEqual = position.every(i => position[i] !== null && position[i] == position[0])
        if (positionsAreEqual) return true
        return false
    }

    const winningPosition = victoryConditions.find(isWinningPosition)
    //TODO: use the winningposition to find the winner and return the outcome
    // otherwise a return a draw if all the spaces are full

    return { outcome: null }
}