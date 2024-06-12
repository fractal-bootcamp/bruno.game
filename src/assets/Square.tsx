//function Square takes a value and an onSquareClick
// and displays a value when clicked on the square

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}