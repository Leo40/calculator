import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import * as math from "mathjs";

function App() {

  const [value, setValue] = useState(["0"]);
  const [theme, setTheme] = useState("theme-one");  
  const [altColorOne, setAltColorOne] = useState("hsl(225, 21%, 49%)");
  const [altColorTwo, setAltColorTwo] = useState("hsl(6, 63%, 50%)");

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const handleClick = (clickedSymbol) => {    
    value[0].length === 1 ? setValue([clickedSymbol]) : setValue([...value, clickedSymbol]);
  }

  const handleReset = () => {
    setValue(["0"]);
  }

  const computeResult = () => {
    const input = value.join("");
    setValue([math.evaluate(input)]);
  }

  const handleDelete = () => {
    value[0].length === 1 ? setValue([value]) : value.pop();
    setValue([value]);
  }

  const handleToggle = (theme) => {
    setTheme(theme);    

    if(theme === "theme-one") {
      document.body.style = 'background: hsl(222, 26%, 31%;';
      setAltColorOne("hsl(225, 21%, 49%)");
      setAltColorTwo("hsl(6, 63%, 50%)");
    }

    if(theme === "theme-two") {
      document.body.style = 'background: hsl(0, 0%, 90%);';
      setAltColorOne("hsl(185, 42%, 37%)");
      setAltColorTwo("hsl(25, 98%, 40%)");
    }

    if (theme === "theme-three") {      
      document.body.style = 'background: hsl(268, 75%, 9%);';
      setAltColorOne("hsl(281, 89%, 26%)");
      setAltColorTwo("hsl(176, 100%, 44%)");
    }

    localStorage.setItem('theme', theme);
  }  
  
  return (
    <div className={`App ${theme}`}>
      <Header handleToggle={handleToggle}/>
      <div className="result-container">
        <div className="result"><Result value={value} /></div>        
      </div>
      <div className="keypad-container">
        <div className="key-row">
          <div><Button symbol={7} handleClick={handleClick} /></div>
          <div><Button symbol={8} handleClick={handleClick} /></div>
          <div><Button symbol={9} handleClick={handleClick} /></div>
          <div><Button symbol={"DEL"} altColor={altColorOne} handleClick={handleDelete} /></div>
        </div>
        <div className="key-row">
          <div><Button symbol={4} handleClick={handleClick} /></div>
          <div><Button symbol={5} handleClick={handleClick} /></div>
          <div><Button symbol={6} handleClick={handleClick} /></div>
          <div><Button symbol={"+"} handleClick={handleClick} /></div>
        </div >
        <div className="key-row">
          <div><Button symbol={1} handleClick={handleClick} /></div>
          <div><Button symbol={2} handleClick={handleClick} /></div>
          <div><Button symbol={3} handleClick={handleClick} /></div>
          <div><Button symbol={"-"} handleClick={handleClick} /></div>
        </div>
        <div className="key-row">
          <div><Button symbol={"."} handleClick={handleClick} /></div>
          <div><Button symbol={0} handleClick={handleClick} /></div>
          <div><Button symbol={"/"} handleClick={handleClick} /></div>
          <div><Button symbol={"x"} handleClick={handleClick} /></div>
        </div>
        <div className="key-row">
          <div ><Button symbol={"RESET"} altColor={altColorOne} handleClick={handleReset} /></div>
          <div ><Button symbol={"="} altColor={altColorTwo} handleClick={computeResult} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
