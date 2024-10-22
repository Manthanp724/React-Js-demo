import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isxTurn, setIsxTurn] = useState(true);

  const checkWinner = () => {
    const winnerNumber = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let number of winnerNumber) {
      const [a, b, c] = number;

      if (state[a] != null && state[a] == state[b] && state[a] == state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const iswinner = checkWinner();

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isxTurn ? "X" : "O";
    setState(copyState);
    setIsxTurn(!isxTurn);
  };

   const startNewGame = () => {
    setState(Array(9).fill(null))
   }

  return (
    <>  
      {iswinner ? ( 
        <>
          <h1 className="text-4xl text-center font-serif">
            {iswinner} Won the match
          </h1>

          <button  className="bg-green-600 px-3 py-2" onClick={startNewGame}>Play again</button>
        </>
      ) : (
        <div className="m-8">
          <div className="flex justify-evenly items-center ">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="flex justify-evenly items-center ">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="flex justify-evenly items-center ">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
