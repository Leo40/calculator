import './App.css';
import Button from './components/Button';
import Result from './components/Result';
import Reset from './components/Reset';
import Equal from './components/Equal';
import { useState } from 'react';
import Delete from './components/Delete';

function App() {

  const [value, setValue] = useState(["0"]);

  const handleClick = (clickedSymbol) => {    
    value[0].length === 1 ? setValue([clickedSymbol]) : setValue([...value, clickedSymbol]);
  }

  const handleReset = () => {
    setValue(["0"]);
  }

  const handleDelete = () => {
    value[0].length === 1 ? setValue([value]) : value.pop();
    setValue([value]);
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
        <div><Delete symbol={"DEL"} handleDelete={handleDelete} /></div>
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
        <div ><Reset symbol={"RESET"} handleReset={handleReset} /></div>
        <div ><Equal symbol={"="} handleClick={handleClick} /></div>
      </div>
    </div >
    </div>
  );
}

export default App;
