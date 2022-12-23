import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import KeyPad from './components/KeyPad';
import Result from './components/Result';

function App() {
  const [result, setResult] = useState(0);

  const hendelClick = button => {
    if (button === "=") {
      calculate()
    } else if (button === "C") {
      reset()
    } else if (button === "CE") {
      backspace()
    } else {
      setResult(result + button)
    }
  };

  const calculate = () => {
    var checkResult = ''
    if (result.includes('--')) {
      checkResult = result.replace('--', '+')
    } else {
      checkResult = result
    }
    try {
      // eslint-disable-next-line
      setResult((eval(checkResult)))
    } catch (e) {
      console.log(e);
      setResult("Error", e)
    }
  };

  const reset = () => {
    setResult("")
  };
  const backspace = () => {
    setResult(result.slice(0, -1))
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Calculator</code> useing React Hooks.
        </p>
      <div className="calculator-body">
        <Result result={result} />
        <KeyPad onClick={hendelClick} />
      </div>
      </header>
    </div>
  );
}

export default App;
