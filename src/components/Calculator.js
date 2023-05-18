import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

const Calculator = () => {
  const [currentState, updateState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateView = (e) => {
    const newView = calculate(currentState, e.target.value);
    updateState(newView);
  };

  return (
    <div className="calculator_parent_container">
      <div className="side_text">
        <p>Lets Make Some Math Magic!</p>
      </div>
      <div className="calculator">
        <div className="display_result">
          <div className="result">
            {
              currentState.next || currentState.operation || currentState.total || '0'
            }
          </div>
        </div>
        <div className="input_values">
          <div className="inputs">
            <Buttons onClick={updateView} value="AC" />
            <Buttons onClick={updateView} value="+/-" />
            <Buttons onClick={updateView} value="%" />
            <Buttons onClick={updateView} className="orange" value="÷" />
          </div>
          <div className="inputs">
            <Buttons onClick={updateView} value="7" />
            <Buttons onClick={updateView} value="8" />
            <Buttons onClick={updateView} value="9" />
            <Buttons onClick={updateView} className="orange" value="x" />
          </div>
          <div className="inputs">
            <Buttons onClick={updateView} value="4" />
            <Buttons onClick={updateView} value="5" />
            <Buttons onClick={updateView} value="6" />
            <Buttons onClick={updateView} className="orange" value="-" />
          </div>
          <div className="inputs">
            <input type="button" onClick={updateView} value="1" />
            <input type="button" onClick={updateView} value="2" />
            <input type="button" onClick={updateView} value="3" />
            <input type="button" onClick={updateView} className="orange" value="+" />
          </div>
          <div className="inputs three-grid">
            <Buttons onClick={updateView} value="0" />
            <Buttons onClick={updateView} value="." />
            <Buttons onClick={updateView} className="orange" value="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
