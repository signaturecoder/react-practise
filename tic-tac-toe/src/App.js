import React from "react";
import "./App.scss";
import Game from "./Game";
import Label from "./Atoms/Label";

function App() {
  return (
    <>
      <h1 className="App-heading">Tic-Tac-Toe Game</h1>
      <Label />
      <Game />
    </>
  );
}

export default App;
