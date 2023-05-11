import './Calculator.css';

const Calculator = () => (
  <div className="calculator_parent_container">
    <div className="display_result">
      <div className="result">0</div>
    </div>
    <div className="input_values">
      <div className="inputs">
        <input type="button" value="AC" />
        <input type="button" value="+/-" />
        <input type="button" value="%" />
        <input type="button" className="orange" value="/" />
      </div>
      <div className="inputs">
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" className="orange" value="x" />
      </div>
      <div className="inputs">
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" className="orange" value="-" />
      </div>
      <div className="inputs">
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" className="orange" value="x" />
      </div>
      <div className="inputs three-grid">
        <input type="button" value="0" />
        <input type="button" value="." />
        <input type="button" className="orange" value="=" />
      </div>
    </div>
  </div>
);

export default Calculator;
