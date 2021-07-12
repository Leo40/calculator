import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState("Waraa");

  const handleClick = (clickedSymbol) => {
    setValue(clickedSymbol);
  }
  return (
    <div className="App">
      <div className="Result-Container">
        <div className="Result"><Result value={value} /></div>
      </div>
      <div className="Button-Container">
        <div className="Button"><Button symbol={7} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={8} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={9} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={"DEL"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Container">
        <div className="Button"><Button symbol={4} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={5} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={6} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={"+"} handleClick={handleClick} /></div>
      </div >
      <div className="Button-Container">
        <div className="Button"><Button symbol={1} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={2} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={3} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={"-"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Container">
        <div className="Button"><Button symbol={"."} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={0} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={"/"} handleClick={handleClick} /></div>
        <div className="Button"><Button symbol={"x"} handleClick={handleClick} /></div>
      </div>
    </div >
  );
}

export default App;
