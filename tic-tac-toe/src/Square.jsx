// import React, { Component } from "react";

// export default class Square extends Component {
//   // State is coming from parent now
//   // constructor(props){
//   //     super(props);
//   //     this.state = {
//   //         value: null,
//   //     }
//   // }
//   render() {
//     return (
//       <div>
//         <button className="square" onClick={() => this.props.onClickSquare()}>
//           {this.props.value}
//         </button>
//       </div>
//     );
//   }
// }

import React from "react";

const Square = props => {
  return (
    <div>
      <button className="square" onClick={props.onClickSquare}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
