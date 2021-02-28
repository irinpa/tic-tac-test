import React from 'react'
import styles from './SetupView.module.css'

const SetupView = (props) => {
  return (
    <div className={styles.SetupView}>
      <h3>Set up game</h3>
      <span>
        <select name="minNum"
          value={props.minNum}
          onChange={(e) => props.setMinNumValue(e.target.value)}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </span>
      <button onClick={props.buttonClicked}>Play</button>
    </div>
  );
};

export default SetupView
