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
    arr.push([i, eArr]);
  }
  console.log(arr);
  return (
    <div>
      {arr.map(e => {
        return (
          <div className="characterData">
            {e[0]}
            <div className="characterData__moves">
              {e[1].map(i => {
                return (
                  <div className="characterData__data">
                    {i[0]}
                    {i[1].map(x => {
                      return <div>{`${x[0]}: ${x[1]}`}</div>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
