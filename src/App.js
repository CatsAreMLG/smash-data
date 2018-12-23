import React, { Component } from "react";
import "./css/App.css";
import fighterNames from "./names";

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

let newList = [];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
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

let arr = [];

for (let i = 0; i < images.length; i++) {
  console.log(Object.keys(images[i])[0]);
  arr.push(
    <div className="image__container">
      <span>{Object.keys(images[i])[0].split`.png`.join``.split`_`.map(e =>
        e.toUpperCase()
      ).join` `}</span>
      <img src={Object.values(images[i])} alt={Object.keys(images[i])[0]} />
    </div>
  );
}
class App extends Component {
  render() {
    return <div className="App">{arr}</div>;
  }
}

export default App;
