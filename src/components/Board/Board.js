import React, { Component } from 'react'
import Game from '../../containers/Game/Game'
import Square from '../Square/Square'
import styles from './Board.module.css'
import checkWin from '../../gameLogic/CheckWin'

class Board extends Component {
  state = {
    board: new Array(this.props.rows)
      .fill(null)
      .map((i) => new Array(this.props.cols).fill(null)),
    turn: 'X',
    winner: '',
    replay: false,
  };

  createBoard = () => {
    let playBoard = []
    let board = this.state.board
    for (let r = 0; r < this.props.rows; r++) {
      let row = []
      for (let c = 0; c < this.props.cols; c++) {
        row.push(
          <Square
            row={r}
            col={c}
            key={r + c}
            setValue={this.handleSetValue}
            value={board[r][c]}
            disable={this.state.winner === "X" || this.state.winner === "O"}
          />
        )
      }
      playBoard.push(
        <div className={styles.Row} key={"row" + r}>
          {row}
        </div>
      )
    }
    return (
      <div
        className={styles.RowsWrapper}
        style={{ width: this.props.cols * 48 }}
      >
        {playBoard}
      </div>
    );
  };

  handleSetValue = (currentRow, currentCol) => {
    let { board, turn } = this.state
    board[currentRow][currentCol] = turn
    const { rows, cols, minNum } = this.props
    const winner = checkWin(
      board,
      rows,
      cols,
      minNum,
      currentRow,
      currentCol
    );
    this.setState({
      board: board,
      turn: turn === "X" ? "O" : "X",
      winner: winner,
    });
  };

  replayGame = () => {
    this.setState({ replay: true });
  };

  render() {
    const { turn, winner, replay } = this.state;
    console.log(this.state)
    if (replay) return <Game />
    let status = `Next player: ${turn}`
    if (winner !== '') {
        if (winner === "X" || winner === "O") {
        status = `The winner is ${winner}`
      }
    }
    return (
      <div className={styles.Board}>
        <div className={styles.StatusText}>{status}</div>
        {this.createBoard()}
        <button onClick={this.replayGame}>Replay</button>
      </div>
    );
  }
}

export default Board
