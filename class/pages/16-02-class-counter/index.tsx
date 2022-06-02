import { Component } from "react"; // 컴포넌트 기능들을 물려 받았다. react에서 제공

export default class ClassCounterPage extends Component {
  // apple = 3
  // banana = 2
  // name = "철수"

  state = {
    count: 99,
  };

  onClickCounter() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    console.log(this.state.count);
  }

  render() {
    // 화면에 그려줘
    return (
      <div>
        {/* this는 현재 class 자신을 의미한다 */}
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button>
      </div>
    );
  }
}
