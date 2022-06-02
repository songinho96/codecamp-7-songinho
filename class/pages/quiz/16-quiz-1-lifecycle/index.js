import { Router } from "next/router";
import { Component } from "react";

export default class ClassLifeCycle extends Component {
  state = {
    isChange: false,
  };

  componentDidMount() {
    alert("Rendered!");
  }

  componentDidUpdate() {
    alert("Change!!");
  }

  componentWillUnmount() {
    alert("BYE!!!");
  }

  onClickChange = () => {
    this.setState((prev) => !prev);
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <div>현재: {this.state.isChange}</div>
        <button onClick={this.onClickChange}>변경</button>
        <button onClick={this.onClickMove}>이동</button>
      </div>
    );
  }
}
