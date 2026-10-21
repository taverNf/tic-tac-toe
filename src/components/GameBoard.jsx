export default function GameBoard({ onSelectSquare, board }) {
  // turns é o State da array de turnos onde um turno é um objeto {square: {row, col}, playerSymbol: 'X' ou 'O',}
  

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [ ...prevGameBoard.map( (innerArray) => [...innerArray] ) ];
  //     // primeiro pega a array com as rows, depois mapeia ela para pegar as arrays de columns
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare()
  // }

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
