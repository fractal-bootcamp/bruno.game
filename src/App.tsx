// import Square from "./Square"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, MouseEventHandler } from 'react';
import './App.css';

//function Square takes a value and an onSquareClick
// and displays a value when clicked on the square

export function Square(value: string | number | boolean | ReactElement<any, string
    //function Square takes a value and an onSquareClick
    // and displays a value when clicked on the square
    |
    // and displays a value when clicked on the square
    JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, onClick: MouseEventHandler<HTMLButtonElement> | undefined) {

    return (
        <button className="square" onClick={onClick}>{value}dsadsafda</button>
    )
}


function App() {
    const value = "Hello, World!";

    return (
        <>
            <div className="box"><Square valueOf={value} />DSDSFS</div>
            <div className="box"><Square valueOf={value} />DSDSFS</div>
            <div className="box"><Square valueOf={value} />DSDSFS</div>
            <div className="box"><Square valueOf={value} />DSDSFS</div>
            <div className="box"><Square valueOf={value} />DSDSFS</div>
            <div className="box"><Square valueOf={value} />DSDSFS</div>
        </>
    )
}

export default App


