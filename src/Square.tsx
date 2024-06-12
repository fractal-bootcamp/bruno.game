import { useState } from "react"
import Game from "./game"


export default function Square() {
    const [value, setValue] = useState<string>('');
    const [boxvalue, setBoxvalue] = useState<any[]>([]);

    function handleClick() {
        setValue(value + 'X');
        console.log('clicked!');
        console.log(Game[0])
        // setBoxvalue(boxvalue.push[game.board[]])
    }

    return (
        <>
            <button className="square" onClick={handleClick}>
                {value}
            </button>
        </>
    )
}

