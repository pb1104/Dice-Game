
import React, { useState } from "react";
function P2(){
    const [count, setCount] = useState(0);
    const [images, setImages] = useState("/public/images/dice1.png");
    const [dicval, setDic] = useState();
    const [userVal, setUser] = useState(0);
  
    const checkMatch = (r) => {
        console.log(userVal);
        console.log(r);
      if (r === userVal) {
        console.log("Match! You guessed correctly.");
        setCount((prev) => prev + userVal);
      } else {
        console.log("Not a match. Try again.");
        setCount((prev) => prev - userVal);
      }
    };
  
    const handleRollDice = () => {
      const files = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
      let randomIndex = Math.floor(Math.random() * 6);
     
      let randomImage = files[randomIndex];
      setImages(`/public/images/${randomImage}`);
      randomIndex++;
      console.log(randomIndex);
      setDic(randomIndex);
      if (dicval) { // Ensure dicval has a value before checking
        checkMatch(randomIndex);
      }
    };
    const get = (event) => {
        setUser(parseInt(event.target.value, 10));
      };
   

    return(
   <div className="p2">
  <nav className="n1">
        <div className="point">
            <p>{count}</p>
            <label htmlFor="Score">Score</label>
        </div>
        <div className="boxes">
        <div className="b2">
        <button className="box"  value={1} onClick={get} >1</button>
         <label htmlFor="Select">Select</label>
        </div>
        <div className="b2">
        <button className="box"  value={2} onClick={get} >2</button>
         <label htmlFor="Select" >Number</label>
        </div>      
        <div className="b2">
        <button className="box"  value={3} onClick={get} >3</button>
         <label htmlFor="Select" >First</label>
        </div> 
         <button className="box" value={4} onClick={get} >4</button>
         <button className="box" value={5} onClick={get} >5</button>
         <button className="box" value={6} onClick={get} >6</button>
        </div>
    </nav>
    <hr />
    <div className="game">
        <img src={images} alt="Dice" />
        <button onClick={handleRollDice} >Dice Roll</button>
        <button onClick={() => {
  setCount(0);
  setUser(0); 
}}>Reset</button>
      </div>
   </div>
    );
}
export default P2;