import React, { Component } from 'react'
import Board from '../../components/Board/Board'
import SetupView from '../../components/SetupView/SetupView'
import styles from './Game.module.css'

const sqrSize = 10

class Game extends Component {

  state = {
    rows: sqrSize,
    columns: sqrSize,
    minNum: 3,
    isValidSetup: false
    };

  buttonClickHandler = () => {
    this.setState({ isValidSetup: true })
  }

  setMinNumValue = (value) => {
    this.setState({
      minNum: parseInt(value)
    })
  }

  render() {
    return (
      <div className={styles.Game}>
        {!this.state.isValidSetup ? (
          <SetupView 
            minNum={this.state.minNum}
            setMinNumValue={this.setMinNumValue}
            buttonClicked={this.buttonClickHandler}
            errorMessage={this.state.errorMessage}
          />
        ) : (
          <Board
            rows={this.state.rows}
            cols={this.state.columns}
            minNum={this.state.minNum}
          />
        )}
      </div>
    )
  }
}

export default Game
