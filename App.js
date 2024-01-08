import './App.css';
import Display from './Display';
import Buttons from './Buttons';
import { useState } from "react";

function App() {

  const [color, setColor] = useState('white');


  return (
    <div className='container'>
      <Display color={color}/>
      <Buttons setColor={setColor}/>
    </div>
  );
}

export default App;