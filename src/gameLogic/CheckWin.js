function checkWin(matrix, rowsNum, colsNum, minNum, currentRow, currentCol) {
  let winner = "";
  let consecutive = 0;
  const currentTurn = matrix[currentRow][currentCol];

  for (let c = 0; c < colsNum; c++) {
    let currentValue = matrix[currentRow][c];
    if (currentValue === currentTurn){
      consecutive++;
    } else {
      consecutive = 0;
    }
    if (consecutive === minNum) {
      winner = currentTurn;
      break;
    }
  }

  if (winner !== "") return winner;

  consecutive = 0;

  for (let r = 0; r < rowsNum; r++) {
    let currentValue = matrix[r][currentCol];
    if (currentValue === currentTurn) {
      consecutive++;
    } else {
      consecutive = 0;
    }
    if (consecutive === minNum) {
      winner = currentTurn;
      break;
    }
  }

  if (winner !== "") return winner;
  return winner;
}

export default checkWin;