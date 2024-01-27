import React from "react";
function P1({toggle,ru}){
    return(
    <div className="b1">
        <div >
            <img className="i1" src="images/i1 271.png" alt="" />
        </div>
        <div className="but1">
            <h1>Dice Game</h1>
            <button 
            onClick={toggle}
            >Start Game</button>
            <div className="rules">
                <ol>
                    <li>1st user need to selet a number from 1 to 6.</li>
                    <br />
                    <li>Then roll the dice.</li>
                    <br />
                    <li>If dice value is same as user input then score will be added with userinput if not same then userinput will be deducted from score.</li>
                    <br />
                    <li>At 1st try there is no score addition or deduction.</li>
                </ol>
            </div>
        </div>

    </div>
    );
}
export default P1;