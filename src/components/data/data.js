import React from "react";

const Data = props => {
  let moves = [];
  let type = [
    "Startup",
    "Total Frames",
    "Landing Lag",
    "Changes from Smash 4",
    "Additional Notes"
  ];
  let description = [];
  if (props.data) {
    for (let i in props.data[props.name]) {
      moves.push(<div>{i}</div>);
      description.push(type.map(type => props.data[props.name][i][type]));
    }
    return (
      <div className="data">
        <h3 className="tableName">{props.name}</h3>
        <table>
          <thead>
            <tr>
              <th>Move</th>
              {type.map((type, i) => (
                <th key={`${type}-${i}`}>{type}</th>
              ))}
            </tr>
          </thead>
          {moves.map((move, i) => (
            <tbody key={`${move}-${i}`}>
              <tr>
                <td>{moves[i]}</td>
                {description[i].map((desc, i) => (
                  <td key={`${desc}-${i}`}>{desc}</td>
                ))}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  } else {
    return <div />;
  }
};

export default Data;
