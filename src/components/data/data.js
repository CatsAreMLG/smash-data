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
      description.push([
        props.data[props.name][i][type[0]],
        props.data[props.name][i][type[1]],
        props.data[props.name][i][type[2]],
        props.data[props.name][i][type[3]],
        props.data[props.name][i][type[4]]
      ]);
    }
    return (
      <div className="data">
        <div>{props.name}</div>
        <table>
          <tr>
            <th>Move</th>
            {type.map(type => (
              <th>{type}</th>
            ))}
          </tr>
          {console.log(description)}
          {moves.map((move, i) => (
            <tr>
              <td>{moves[i]}</td>
              {description[i].map(desc => (
                <td>{desc}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return <div />;
  }
};

export default Data;
