import Square from "./Square"
import './App.css';
function App() {


    return (
        <>
            <div className="game-board">
                <div className="box"><Square /></div>
                <div className="box"><Square /></div>
                <div className="box"><Square /></div>

                <div className="box"><Square /></div>
                <div className="box"><Square /></div>
                <div className="box"><Square /></div>

                <div className="box"><Square /></div>
                <div className="box"><Square /></div>
                <div className="box"><Square /></div>
                <p> Tic Tac Toe</p>
            </div>
        </>
    )
}

export default App


