import React, { Component } from "react";
import "./css/App.css";
import fighterNames from "./names";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  console.log(images);
  return images;
}

const images = importAll(
  require.context("./images/characters", false, /\.(png|jpe?g|svg)$/)
);

let arr = [];

for (let i in images) {
  arr.push(
    <div className="image__container">
      <span>{i.split`.png`.join``.split`_`.map(e => e.toUpperCase())
        .join` `}</span>
      <img src={images[i]} alt="mario" />
    </div>
  );
}
class App extends Component {
  render() {
    return <div className="App">{arr}</div>;
  }
}

export default App;
