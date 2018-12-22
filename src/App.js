import React, { Component } from "react";
import "./css/App.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images/characters", false, /\.(png|jpe?g|svg)$/)
);

let arr = [];

for (let i in images) {
  arr.push(<img src={images[i]} alt="mario" />);
}
class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log(images)}
        {arr}
      </div>
    );
  }
}

export default App;
