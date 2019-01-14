import React from "react";
import Character from "./Character";
import fighterNames from "../../names";

const Characters = props => {
  let arr = [];

  const images = props.import(
    require.context("../../images/characters", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(images);

  for (let i = 0; i < 72; i++) {
    const charName = Object.keys(images[i])[0].split`.png`.join``.split`_`.map(
      e => e.toUpperCase()
    ).join` `;
    const style = { backgroundImage: `url(${Object.values(images[i])})` };
    arr.push(
      <Character
        key={`char-${i + 1}`}
        data={props.data}
        name={fighterNames[i + 1]}
      >
        <div style={style} className="image__container">
          <span className="characterName">{charName}</span>
          {/* <img src={Object.values(images[i])} alt={Object.keys(images[i])[0]} /> */}
        </div>
      </Character>
    );
  }
  //   if (window.innerWidth <= 440) {
  //     document
  //       .querySelectorAll(".App div:nth-child(n + 10)")
  //       .forEach(character => character.classList.add("hidden"));
  //   }
  //   const more = e => {
  //     document
  //       .querySelectorAll(".App div:nth-child(n+30)")
  //       .forEach(character => character.classList.toggle("shown"));
  //     document
  //       .querySelectorAll(".App div:nth-child(n+30)")
  //       .forEach(character => character.classList.toggle("hidden"));
  //     e.target.classList.toggle("hidden");
  //   };

  return (
    <>
      <div className="App">
        {arr}
        {/* <button onClick={more}>See More</button> */}
      </div>
    </>
  );
};

export default Characters;
