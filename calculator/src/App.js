import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import NumberFormat from 'react-number-format';

function App() {

  const [input, setInput] = useState("0");
  const [prevState, setPrevState] = useState("");
  const [currState, setCurrState] = useState("");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState(false);
  const [theme, setTheme] = useState("theme-one");  

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const inputNum = (symbol) => {
    if(currState.includes(".") && symbol === ".") {
      return;
    }

    if(total) {
      setPrevState("");
    }

    currState 
      ? setCurrState((pre) => pre + `${symbol}`) 
      : setCurrState(`${symbol}`);
    setTotal(false);
  };

  useEffect(() => {
    setInput(currState)
  }, [currState]);

  useEffect(() => {
    setInput("0")
  }, []);
  
  const operatorType = (symbol) => {
    setTotal(false);
    setOperator(symbol);
    if(currState === "") return;
    if(prevState !== ""){
      equals();
    } 
    else{
      setPrevState(currState);
      setCurrState("");
    }
  };

  const equals = (symbol) => {
    if(symbol === "="){
      setTotal(true);
    }

  let cal 
  switch (operator) {
    case "/":
      cal = String(parseFloat(prevState) / parseFloat(currState));
      break;
    case "+": 
      cal = String(parseFloat(prevState) + parseFloat(currState));
      break;
    case "x": 
      cal = String(parseFloat(prevState) * parseFloat(currState));    
      break;
    case "-": 
      cal = String(parseFloat(prevState) - parseFloat(currState));
      break;
    default:
      return
  }

  setInput("");
  setPrevState(cal);
  setCurrState("");
}

  const reset = () => {
    setPrevState("");
    setCurrState("");
    setInput("0");
  }

  const deleteNum = () => {    
    if(input.length > 1) {
      const trimmedInput = input.slice(0,-1);
      setInput(trimmedInput);
      setCurrState(trimmedInput);
     }
    else {
      setInput("0"); 
      setCurrState("");
      setPrevState(""); 
    }
  }

  const handleToggle = (theme) => {  
    setTheme(theme);    
    localStorage.setItem('theme', theme);
  }  

  const handleSliderToggle = (e) => {
    const xPosition = e.nativeEvent.offsetX;

    if(xPosition > 0 && xPosition < 24) {
      setTheme("theme-one");
      localStorage.setItem('theme', "theme-one");
    }

    else if(xPosition > 23 && xPosition < 47) {
      setTheme("theme-two");
      localStorage.setItem('theme', "theme-two");
    }

    else if(xPosition > 46 && xPosition < 70) {
      setTheme("theme-three");
      localStorage.setItem('theme', "theme-three");
    }      
  }
  
  return (
    <div className="app-wrapper">
      <div className={`App ${theme}`}>
        <Header handleToggle={handleToggle} handleSliderToggle={handleSliderToggle}/>
        <div className="result-container">
          <div className="result"><Result input={input !== "" || input === "0" ? 
          <NumberFormat 
            value={input} 
            displayType={'text'} 
            thousandSeparator={true} 
            />
            : 
            <NumberFormat 
            value={prevState} 
            displayType={'text'} 
            thousandSeparator={true}
            />
            }/>
            </div>        
        </div>
        <div className="keypad-container">
          <div className="key-row">
            <Button symbol={7} handleClick={inputNum} />
            <Button symbol={8} handleClick={inputNum} />
            <Button symbol={9} handleClick={inputNum} />
            <Button symbol={"DEL"} className={"delete"} handleClick={deleteNum} />
          </div>
          <div className="key-row">
            <Button symbol={4} handleClick={inputNum} />
            <Button symbol={5} handleClick={inputNum} />
            <Button symbol={6} handleClick={inputNum} />
            <Button symbol={"+"} handleClick={operatorType} />
          </div >
          <div className="key-row">
            <Button symbol={1} handleClick={inputNum} />
            <Button symbol={2} handleClick={inputNum} />
            <Button symbol={3} handleClick={inputNum} />
            <Button symbol={"-"} handleClick={operatorType} />
          </div>
          <div className="key-row">
            <Button symbol={"."} handleClick={inputNum} />
            <Button symbol={0} handleClick={inputNum} />
            <Button symbol={"/"} handleClick={operatorType} />
            <Button symbol={"x"} handleClick={operatorType} />
          </div>
          <div className="key-row">
            <Button symbol={"RESET"} className={"reset"} handleClick={reset} />
            <Button symbol={"="} className={"equal"} handleClick={equals} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
