const GameBoard = ({ onSelect, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerChoice, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => onSelect(rowIdx, colIdx)}
                  disabled={playerChoice !== null}
                >
                  {playerChoice}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
