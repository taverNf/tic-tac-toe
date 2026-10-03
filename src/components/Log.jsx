export default function Log({ turns }) {
  // código feito por mim:
  /*  const turnsArr = []

      for (const turn of turns) {
        const {square, playerSymbol} = turn
        const {row, col} = square

        turnsArr.push(`${playerSymbol} selected ${row}, ${col}`)
      }
  */

  return (
    <ol id='log'>
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.playerSymbol} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
      {/*{turnsArr.map((turn) => <li key={`${row}${col}`}>{turn}</li>)} // código feito por mim */}
    </ol>
  );
}
