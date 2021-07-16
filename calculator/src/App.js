import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import { useState } from 'react';
import Header from './components/Header';
import * as math from "mathjs";

function App() {

  const [value, setValue] = useState(["0"]);
  const [colorTheme, setTheme] = useState("theme-three");

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

  const altColor1 = "hsl(281, 89%, 26%)";
  const altColor2 = "hsl(176, 100%, 44%)"; 
  const altStyles = {
    width: "40px",
    padding: "10px 45px 15px 45px"
  }
  
  return (
    <div className={`App ${colorTheme}`}>
      <Header />
      <div className="Result-Container">
        <div className="Result"><Result value={value} /></div>        
      </div>
      <div className="Button-Row">
        <div><Button symbol={7} handleClick={handleClick} /></div>
        <div><Button symbol={8} handleClick={handleClick} /></div>
        <div><Button symbol={9} handleClick={handleClick} /></div>
        <div><Button symbol={"DEL"} altColor={altColor1} handleClick={handleDelete} /></div>
      </div>
      <div className="Button-Row">
        <div><Button symbol={4} handleClick={handleClick} /></div>
        <div><Button symbol={5} handleClick={handleClick} /></div>
        <div><Button symbol={6} handleClick={handleClick} /></div>
        <div><Button symbol={"+"} handleClick={handleClick} /></div>
      </div >
      <div className="Button-Row">
        <div><Button symbol={1} handleClick={handleClick} /></div>
        <div><Button symbol={2} handleClick={handleClick} /></div>
        <div><Button symbol={3} handleClick={handleClick} /></div>
        <div><Button symbol={"-"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Row">
        <div><Button symbol={"."} handleClick={handleClick} /></div>
        <div><Button symbol={0} handleClick={handleClick} /></div>
        <div><Button symbol={"/"} handleClick={handleClick} /></div>
        <div><Button symbol={"x"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Row">
        <div ><Button symbol={"RESET"} altStyles={altStyles} altColor={altColor1} handleClick={handleReset} /></div>
        <div ><Button symbol={"="} altStyles={altStyles} altColor={altColor2} handleClick={computeResult} /></div>
      </div>
    </div>
  );
}

export default App;
