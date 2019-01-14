import React from "react";
import Data from "../data/data";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showState: false
    };
  }

  showData = () => {
    if (!this.state.showState) {
      this.setState({
        showState: true
      });
    } else {
      this.setState({
        showState: false
      });
    }
  };

  render() {
    return (
      <>
        {this.props.children}
        <div className="dataButton" onClick={this.showData}>
          {!this.state.showState ? "Show Data" : "Hide Data"}
        </div>
        {this.state.showState && (
          <Data data={this.props.data} name={this.props.name} />
        )}
      </>
    );
  }
}

export default Character;
