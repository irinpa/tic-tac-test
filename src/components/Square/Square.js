import React, { Component } from 'react'
import styles from './Square.module.css'

class Square extends Component {
  state = {
    clicked: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.disable === true) {
      this.setState({ clicked: true });
    }
  }

  handleClick = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true })
      this.props.setValue(this.props.row, this.props.col)
    }
  };

  render() {
    const classes = [styles.Square]

    if (this.props.value) {
      classes.push(styles[this.props.value])
    }

    return (
      <div className={classes.join(" ")} onClick={this.handleClick}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Square
