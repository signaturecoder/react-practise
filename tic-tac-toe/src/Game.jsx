import React, { Component } from "react";
import Board from "./Board";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      IsNext: true
    };
  }

  handleclick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // ignoring the click if squares is already filled or someone won the game
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
      this.setState({stepNumber: step, xIsNext: (step % 2) === 0})

  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    console.log(this.state.stepNumber)
    console.log(current.squares);
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        console.log("--->", move);
      const desc = move ? "Go to #" + move : "Start Again";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner :" + winner;
    } else {
      status = `Next Player : ${this.state.xIsNext ? "X" : "O"}`;
    }
    return (
      <div>
        <Board squares={current.squares} onClick={i => this.handleclick(i)} />
        <div className="game-info">{status}</div>
        <ol>{moves}</ol>
      </div>
    );
  }
}

// helper function
function calculateWinner(sqaures) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sqaures[a] && sqaures[a] === sqaures[b] && sqaures[a] === sqaures[c]) {
      return sqaures[a];
    }
  }
  return null;
}
