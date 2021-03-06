import React, { Component } from "react";
import "./css/App.css";
import fighterNames from "./names";
import Characters from "./components/characters/Characters";

const frameData = require("./FrameData2.json");

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//variables
let newList = [];
let arr = [];

// functions
function importAll(r) {
  let images = {};
  r.keys().map(item => (images[item.replace("./", "")] = r(item)));
  for (let i = 1; i <= Object.keys(fighterNames).length; i++) {
    let value = fighterNames[i].toLowerCase().split` `.join`_`;
    value += ".png";
    let x = getKeyByValue(images, images[value]);
    let obj = {};
    obj[x] = images[value];
    newList.push(obj);
  }
  return newList;
}

const images = importAll(
  require.context("./images/characters", false, /\.(png|jpe?g|svg)$/)
);

for (let i = 0; i < images.length; i++) {
  const style = { backgroundImage: `url(${Object.values(images[i])})` };
  arr.push(
    <div key={`char-${i + 1}`} style={style} className="image__container">
      <span className="characterName">{Object.keys(images[i])[0].split`.png`
        .join``.split`_`.map(e => e.toUpperCase()).join` `}</span>
    </div>
  );
}
//classes
class App extends Component {
  state = {
    characters: [],
    frameData: []
  };

  componentDidMount() {
    let x = this.state.frameData;
    x.push(frameData);
    this.setState({
      characters: images,
      frameData: x
    });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>Super Smash Bros. Ultimate</h1>
          <h2>Frame Data</h2>
        </div>
        <Characters
          data={this.state.frameData[0]}
          characters={this.state.characters}
          import={importAll}
        />
      </>
    );
  }
}

export default App;
