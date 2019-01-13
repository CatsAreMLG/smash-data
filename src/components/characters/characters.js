import React from "react";
import Character from "./Character";

const Characters = props => {
  let arr = [];

  const images = props.import(
    require.context("../../images/characters", false, /\.(png|jpe?g|svg)$/)
  );

  for (let i = 0; i < images.length; i++) {
    const style = { backgroundImage: `url(${Object.values(images[i])})` };
    arr.push(
      <Character
        key={`char-${i + 1}`}
        style={style}
        className="image__container"
      >
        <span className="characterName">{Object.keys(images[i])[0].split`.png`
          .join``.split`_`.map(e => e.toUpperCase()).join` `}</span>
        {/* <img src={Object.values(images[i])} alt={Object.keys(images[i])[0]} /> */}
      </Character>
    );
  }

  const more = e => {
    document
      .querySelectorAll(".App div:nth-child(n+30)")
      .forEach(character => character.classList.add("shown"));
    e.target.classList.toggle("hidden");
  };

  return (
    <>
      <div className="App">{arr}</div>
      <button onClick={more}>See More</button>
    </>
  );
};

export default Characters;
