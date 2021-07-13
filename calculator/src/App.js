import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import Reset from './components/Reset';
import Equal from './components/Equal';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState([]);

  const handleClick = (clickedSymbol) => {
    setValue([...value,
      clickedSymbol]);
  }
  return (
    <div className="App">
      <div className="Main-Container">
      <div className="Result-Container">
        <div className="Result"><Result value={value} /></div>        
      </div>
      <div className="Button-Container">
        <div><Button symbol={7} handleClick={handleClick} /></div>
        <div><Button symbol={8} handleClick={handleClick} /></div>
        <div><Button symbol={9} handleClick={handleClick} /></div>
        <div><Button symbol={"DEL"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Container">
        <div><Button symbol={4} handleClick={handleClick} /></div>
        <div><Button symbol={5} handleClick={handleClick} /></div>
        <div><Button symbol={6} handleClick={handleClick} /></div>
        <div><Button symbol={"+"} handleClick={handleClick} /></div>
      </div >
      <div className="Button-Container">
        <div><Button symbol={1} handleClick={handleClick} /></div>
        <div><Button symbol={2} handleClick={handleClick} /></div>
        <div><Button symbol={3} handleClick={handleClick} /></div>
        <div><Button symbol={"-"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Container">
        <div><Button symbol={"."} handleClick={handleClick} /></div>
        <div><Button symbol={0} handleClick={handleClick} /></div>
        <div><Button symbol={"/"} handleClick={handleClick} /></div>
        <div><Button symbol={"x"} handleClick={handleClick} /></div>
      </div>
      <div className="Button-Container">
        <div ><Reset symbol={"RESET"} handleClick={handleClick} /></div>
        <div ><Equal symbol={"="} handleClick={handleClick} /></div>
      </div>
    </div >
    </div>
  );
}

export default App;
