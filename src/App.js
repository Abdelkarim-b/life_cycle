import { useState } from 'react';
import './App.css';
import { Text } from './Text';

function App() {
  const [showText, setShowText] = useState(false)
  
  const handleShow = () =>{
    setShowText(!showText)
  }
  return (
    <div className="App">
       <button onClick={handleShow}>Show/Hide</button> 
       {showText && <Text />}
    </div>
  );
}

export default App;
