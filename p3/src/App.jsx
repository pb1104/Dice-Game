import { useState } from 'react';
import './App.css';
import P1 from './Contents/Page1';
import P2 from './Contents/Page2';
function App() {
const [isGame,setGame] = useState(false);
const toggleGame = ()=>{
  setGame((prev) => !prev);
}
  return (
    <>
      {isGame ? <P2 /> : <P1
       toggle={toggleGame}
       />}
    </>
  );
}

export default App;

