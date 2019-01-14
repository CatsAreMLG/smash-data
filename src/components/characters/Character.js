import React from "react";
import Data from "../data/Data";

const Character = props => {
  return (
    <>
      {props.children}
      <Data data={props.data} name={props.name} />
    </>
  );
};

export default Character;
