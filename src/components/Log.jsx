const Log = ({ gameLog }) => {
  return (
    <ol id="log">
      {gameLog.map((log) => {
        return (
          <li key={`${log.square.row}${log.square.col}`}>
            {log.player} selected {log.square.row},{log.square.col}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
