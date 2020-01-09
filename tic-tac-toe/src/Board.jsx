import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {

    //Lifting State up
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true
//     };
//   }

//   handleclick(i) {
//     const squares = this.state.squares.slice();

//     // ignoring the click if squares is already filled or someone won the game
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
//   }

  renderSqure(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClickSquare={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winner :" + winner;
    // } else {
    //   status = `Next Player : ${this.state.xIsNext ? "X" : "O"}`;
    // }

    return (
      <div>
        <div className="board-row">
          {this.renderSqure(0)}
          {this.renderSqure(1)}
          {this.renderSqure(2)}
        </div>
        <div className="board-row">
          {this.renderSqure(3)}
          {this.renderSqure(4)}
          {this.renderSqure(5)}
        </div>
        <div className="board-row">
          {this.renderSqure(6)}
          {this.renderSqure(7)}
          {this.renderSqure(8)}
        </div>
      </div>
    );
  }
  
}

