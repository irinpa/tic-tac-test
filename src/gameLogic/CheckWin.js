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

  //----------------------------------------

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

  //----------------------------------------

  consecutive = 0;
  let col = currentCol

  for (let r = currentRow; r >= 0; r--) {
    let currentValue = matrix[r][col]

    if (currentValue === currentTurn) {
      consecutive++
    } else {
      break
    }

    if(col !== 0){
      col--
    } else {
      break
    }
    if (consecutive === minNum) {
      winner = currentTurn;
      break;
    }
  }

  if (winner !== "") return winner;
  
  col = currentCol +1

  for (let r = currentRow + 1; r < rowsNum; r++) {
    let currentValue = matrix[r][col]

    if (currentValue === currentTurn) {
      consecutive++
    } else {
      consecutive = 0;
    }
    if(col < colsNum - 1){
      col++
    } else {
      break
    }
    if (consecutive === minNum) {
      winner = currentTurn;
      break;
    }
  }

  if (winner !== "") return winner;

  //----------------------------------------

  consecutive = 0;
  col = currentCol
  
  for (let r = currentRow; r >= 0; r--) {
    let currentValue = matrix[r][col]

    if (currentValue === currentTurn) {
      consecutive++
    } else {
      break
    }
    if(col < colsNum - 1){
      col++
    } else {
      break
    }
    if (consecutive === minNum) {
      winner = currentTurn;
      break;
    }
  }

  if (winner !== "") return winner;
  
  col = currentCol - 1

  for (let r = currentRow + 1; r < rowsNum; r++) {
    let currentValue = matrix[r][col]

    if (currentValue === currentTurn) {
      consecutive++
    } else {
      consecutive = 0;
    }
    if(col > 0){
      col--
    } else {
      break
    }
    if (consecutive === minNum) {
      winner = currentTurn;
      break;
    }
  }
  return winner;
}

export default checkWin;