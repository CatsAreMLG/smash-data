import React from "react";

const Data = props => {
  let arr = [];
  for (let i in props.data[0]) {
    let eArr = [];
    for (let e in props.data[0][i]) {
      let xArr = [];
      for (let x in props.data[0][i][e]) {
        xArr.push([x, props.data[0][i][e][x]]);
      }
      eArr.push([e, xArr]);
    }
    eArr.push([i, eArr]);
    arr.push([i, eArr]);
  }
  return (
    <div>
      <div>{console.log(arr)}</div>
    </div>
  );
};

export default Data;
