import React from "react";

const Characters = props => {
  const more = e => {
    document
      .querySelectorAll(".App div:nth-child(n+30)")
      .forEach(character => character.classList.add("shown"));
    e.target.classList.toggle("hidden");
  };

  return (
    <>
      <div className="App">{props.characters}</div>
      <button onClick={more}>See More</button>
    </>
  );
};

export default Characters;
